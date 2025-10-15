from pydantic import BaseModel, Field, EmailStr, field_validator
from typing import Optional
from datetime import datetime


class ContactFormSubmission(BaseModel):
    """Model for contact form submission"""
    name: str = Field(..., min_length=2, max_length=100, description="Full name")
    email: EmailStr = Field(..., description="Email address")
    phone: str = Field(..., min_length=10, max_length=20, description="Phone number")
    message: str = Field(..., min_length=10, max_length=1000, description="Message")

    @field_validator('name')
    @classmethod
    def name_must_not_be_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError('Name cannot be empty or just whitespace')
        return v.strip()

    @field_validator('phone')
    @classmethod
    def phone_must_be_valid(cls, v: str) -> str:
        # Remove common phone number characters
        cleaned = ''.join(char for char in v if char.isdigit() or char in ['+', '-', ' ', '(', ')'])
        if len(cleaned.replace(' ', '').replace('-', '').replace('(', '').replace(')', '')) < 10:
            raise ValueError('Phone number must contain at least 10 digits')
        return v.strip()

    @field_validator('message')
    @classmethod
    def message_must_not_be_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError('Message cannot be empty or just whitespace')
        return v.strip()


class ContactFormResponse(BaseModel):
    """Response model for contact form submission"""
    success: bool
    message: str
    timestamp: Optional[datetime] = None
