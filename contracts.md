# API Contracts - Financial Literacy Academy

## Current Mock Implementation

### Frontend Mock Service (`/app/frontend/src/services/mock.js`)
- **Function**: `submitContactForm(formData)`
- **Current Behavior**: 
  - Simulates 1-second API delay
  - Logs submission to browser console
  - Stores data in localStorage under 'contactSubmissions'
  - Returns success response

### Mock Data Structure
```javascript
{
  name: string,
  email: string,
  phone: string,
  message: string
}
```

---

## Backend Implementation Plan

### 1. API Endpoint
**Route**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required, min 2 chars, max 100 chars)",
  "email": "string (required, valid email format)",
  "phone": "string (required, min 10 chars)",
  "message": "string (required, min 10 chars, max 1000 chars)"
}
```

**Success Response** (200):
```json
{
  "success": true,
  "message": "Thank you for your message. We'll get back to you soon!"
}
```

**Error Response** (400/500):
```json
{
  "success": false,
  "message": "Error message here"
}
```

### 2. Google Sheets Integration

**Required Setup**:
- Google Cloud Project with Sheets API enabled
- Service Account with JSON credentials
- Target Google Sheet shared with service account email

**Sheet Structure**:
| Timestamp | Name | Email | Phone | Message |
|-----------|------|-------|-------|---------|
| 2025-01-15 10:30:00 | John Doe | john@example.com | +1 555-0000 | Hello... |

**Python Libraries Required**:
- `gspread` - Google Sheets Python API wrapper
- `google-api-python-client` - Google API client
- `google-auth` - Google authentication

### 3. Environment Variables

**Backend (.env)**:
```
GOOGLE_SERVICE_ACCOUNT_PATH=./service_account.json
GOOGLE_SHEET_ID=your_spreadsheet_id_here
GOOGLE_SHEET_NAME=ContactSubmissions
```

### 4. Backend Implementation Files

**New Files**:
- `/app/backend/services/sheets_service.py` - Google Sheets integration logic
- `/app/backend/routes/contact.py` - Contact form route handler
- `/app/backend/models/contact.py` - Pydantic models for validation

**Modified Files**:
- `/app/backend/server.py` - Include new contact route
- `/app/backend/requirements.txt` - Add Google Sheets dependencies

---

## Frontend-Backend Integration

### Changes Required in Frontend

**File**: `/app/frontend/src/services/api.js` (New file)
- Replace mock service with real API calls
- Use axios to POST to `${BACKEND_URL}/api/contact`
- Handle success/error responses

**File**: `/app/frontend/src/pages/Home.jsx`
- Import `submitContactForm` from `./services/api.js` instead of `./services/mock.js`
- No other changes needed (same function signature)

### Integration Flow
1. User fills out contact form
2. Frontend validates input (HTML5 + React state)
3. On submit, POST request to `/api/contact`
4. Backend validates with Pydantic
5. Backend authenticates to Google Sheets with service account
6. Backend appends row to spreadsheet
7. Backend returns success/error response
8. Frontend shows toast notification

---

## Testing Checklist

- [ ] Backend endpoint responds to POST requests
- [ ] Pydantic validation works for all fields
- [ ] Google Sheets authentication successful
- [ ] Data correctly appended to Google Sheet
- [ ] Frontend receives success response
- [ ] Error handling works (invalid email, network errors, etc.)
- [ ] Toast notifications display correctly

---

## Deployment Notes

**Before Deployment**:
1. User must create Google Cloud Project
2. User must enable Google Sheets API
3. User must create Service Account and download JSON
4. User must create target Google Sheet
5. User must share sheet with service account email
6. User must set environment variables with sheet ID

**Security**:
- Service account JSON should NEVER be committed to git
- Add `service_account.json` to `.gitignore`
- Use environment variables for all sensitive data
