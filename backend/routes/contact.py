from fastapi import APIRouter, HTTPException, status
from models.contact import ContactFormSubmission, ContactFormResponse
from services.sheets_service import get_sheets_service
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post("/contact", response_model=ContactFormResponse, status_code=status.HTTP_200_OK)
async def submit_contact_form(form_data: ContactFormSubmission):
    """
    Submit a contact form and save it to Google Sheets
    
    Args:
        form_data: Contact form submission data
    
    Returns:
        ContactFormResponse with success status and message
    
    Raises:
        HTTPException: If submission fails
    """
    try:
        logger.info(f"Received contact form submission from {form_data.name} ({form_data.email})")
        
        # Get the Google Sheets service
        sheets_service = get_sheets_service()
        
        # Append the submission to Google Sheets
        sheets_service.append_contact_submission(
            name=form_data.name,
            email=form_data.email,
            phone=form_data.phone,
            message=form_data.message
        )
        
        logger.info(f"Successfully saved contact submission from {form_data.name}")
        
        return ContactFormResponse(
            success=True,
            message="Thank you for your message. We'll get back to you soon!",
            timestamp=datetime.now()
        )
        
    except ValueError as e:
        # Configuration errors (missing env vars, sheet not found, etc.)
        logger.error(f"Configuration error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Server configuration error. Please contact the administrator."
        )
    
    except FileNotFoundError as e:
        # Service account file not found
        logger.error(f"Service account file not found: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Server configuration error. Please contact the administrator."
        )
    
    except Exception as e:
        # General errors
        logger.error(f"Failed to submit contact form: {str(e)}", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit your message. Please try again later or contact us directly."
        )
