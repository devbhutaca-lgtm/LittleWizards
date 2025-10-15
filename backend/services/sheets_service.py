import gspread
from google.oauth2.service_account import Credentials
from datetime import datetime
import os
from pathlib import Path
import logging

logger = logging.getLogger(__name__)


class GoogleSheetsService:
    """Service for interacting with Google Sheets API"""
    
    def __init__(self):
        self.service_account_path = os.getenv('GOOGLE_SERVICE_ACCOUNT_PATH')
        self.sheet_id = os.getenv('GOOGLE_SHEET_ID')
        self.sheet_name = os.getenv('GOOGLE_SHEET_NAME', 'ContactSubmissions')
        self.client = None
        self.spreadsheet = None
        self.worksheet = None
    
    def authenticate(self):
        """Authenticate with Google Sheets API using service account"""
        try:
            if not self.service_account_path:
                raise ValueError("GOOGLE_SERVICE_ACCOUNT_PATH environment variable not set")
            
            if not self.sheet_id:
                raise ValueError("GOOGLE_SHEET_ID environment variable not set")
            
            # Check if service account file exists
            if not os.path.exists(self.service_account_path):
                raise FileNotFoundError(f"Service account file not found: {self.service_account_path}")
            
            # Define the scopes
            scopes = [
                'https://www.googleapis.com/auth/spreadsheets',
                'https://www.googleapis.com/auth/drive'
            ]
            
            # Load credentials
            credentials = Credentials.from_service_account_file(
                self.service_account_path,
                scopes=scopes
            )
            
            # Authorize the client
            self.client = gspread.authorize(credentials)
            logger.info("Successfully authenticated with Google Sheets API")
            
        except Exception as e:
            logger.error(f"Authentication failed: {str(e)}")
            raise
    
    def open_spreadsheet(self):
        """Open the target spreadsheet"""
        try:
            if not self.client:
                self.authenticate()
            
            self.spreadsheet = self.client.open_by_key(self.sheet_id)
            logger.info(f"Successfully opened spreadsheet: {self.spreadsheet.title}")
            
            # Try to get existing worksheet or create new one
            try:
                self.worksheet = self.spreadsheet.worksheet(self.sheet_name)
                logger.info(f"Found existing worksheet: {self.sheet_name}")
            except gspread.exceptions.WorksheetNotFound:
                # Create worksheet with headers
                self.worksheet = self.spreadsheet.add_worksheet(
                    title=self.sheet_name,
                    rows=1000,
                    cols=5
                )
                # Add headers
                self.worksheet.append_row(['Timestamp', 'Name', 'Email', 'Phone', 'Message'])
                logger.info(f"Created new worksheet: {self.sheet_name} with headers")
            
        except gspread.exceptions.SpreadsheetNotFound:
            error_msg = f"Spreadsheet not found. Make sure the sheet with ID '{self.sheet_id}' exists and is shared with your service account."
            logger.error(error_msg)
            raise ValueError(error_msg)
        except Exception as e:
            logger.error(f"Failed to open spreadsheet: {str(e)}")
            raise
    
    def append_contact_submission(self, name: str, email: str, phone: str, message: str):
        """Append a contact form submission to the spreadsheet"""
        try:
            if not self.worksheet:
                self.open_spreadsheet()
            
            # Create timestamp
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            
            # Prepare row data
            row_data = [timestamp, name, email, phone, message]
            
            # Append the row
            self.worksheet.append_row(row_data, value_input_option='RAW')
            logger.info(f"Successfully appended contact submission from {name} ({email})")
            
            return True
            
        except Exception as e:
            logger.error(f"Failed to append contact submission: {str(e)}")
            raise


# Create a singleton instance
_sheets_service = None


def get_sheets_service() -> GoogleSheetsService:
    """Get or create the Google Sheets service instance"""
    global _sheets_service
    if _sheets_service is None:
        _sheets_service = GoogleSheetsService()
    return _sheets_service
