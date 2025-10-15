# Google Sheets Integration Setup Guide

## Overview
Your Financial Literacy Academy website is now ready to save contact form submissions to Google Sheets. Follow these steps to complete the setup.

---

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Sign in with your Google Account
3. Click "Select a project" → "New Project"
4. Enter project name: `Financial Literacy Academy`
5. Click "Create"

---

## Step 2: Enable Google Sheets API

1. In the Google Cloud Console, go to **APIs & Services** → **Library**
2. Search for "Google Sheets API"
3. Click on it and press **Enable**
4. (Optional) Also enable "Google Drive API" for additional functionality

---

## Step 3: Create a Service Account

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **Service Account**
3. Fill in the details:
   - **Service account name**: `sheets-contact-form`
   - **Service account ID**: (auto-generated)
   - **Description**: `Service account for contact form submissions`
4. Click **Create and Continue**
5. Skip the optional steps (roles and user access)
6. Click **Done**

---

## Step 4: Generate Service Account Key

1. In the **Credentials** page, find your service account in the list
2. Click on the service account email (looks like: `sheets-contact-form@project-id.iam.gserviceaccount.com`)
3. Go to the **Keys** tab
4. Click **Add Key** → **Create New Key**
5. Select **JSON** format
6. Click **Create**
7. The JSON key file will be downloaded to your computer

**IMPORTANT**: 
- Copy this email address (e.g., `sheets-contact-form@project-id.iam.gserviceaccount.com`)
- You'll need it in Step 6!

---

## Step 5: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **Blank** to create a new spreadsheet
3. Rename it to: `Kidpreneurs Contact Submissions`
4. (Optional) The system will automatically add headers: Timestamp, Name, Email, Phone, Message
5. Copy the **Spreadsheet ID** from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Example: If URL is `https://docs.google.com/spreadsheets/d/1abc123xyz/edit`
   - Then Spreadsheet ID is: `1abc123xyz`

---

## Step 6: Share the Sheet with Service Account

1. In your Google Sheet, click the **Share** button (top right)
2. Paste the **service account email** from Step 4
   - Example: `sheets-contact-form@project-id.iam.gserviceaccount.com`
3. Select **Editor** permission
4. **UNCHECK** "Notify people" (service accounts don't have real email)
5. Click **Share** or **Send**

**This is critical!** Without this step, the backend cannot access your sheet.

---

## Step 7: Configure Backend Environment

1. Upload the JSON key file you downloaded in Step 4 to your server:
   - Place it in `/app/backend/service_account.json`
   - **NEVER commit this file to git!**

2. Update `/app/backend/.env` with your configuration:

```bash
# MongoDB Configuration (already set)
MONGO_URL=mongodb://mongo:27017
DB_NAME=appDB

# Google Sheets Configuration
GOOGLE_SERVICE_ACCOUNT_PATH=./service_account.json
GOOGLE_SHEET_ID=your_spreadsheet_id_from_step_5
GOOGLE_SHEET_NAME=ContactSubmissions
```

Replace `your_spreadsheet_id_from_step_5` with the actual ID you copied in Step 5.

---

## Step 8: Add service_account.json to .gitignore

Ensure your `.gitignore` file includes:

```
service_account.json
*.json
!package.json
!package-lock.json
```

This prevents accidentally committing your credentials.

---

## Step 9: Restart Backend Server

After updating the `.env` file, restart the backend:

```bash
sudo supervisorctl restart backend
```

Check the logs to ensure it started successfully:

```bash
tail -f /var/log/supervisor/backend.out.log
```

---

## Step 10: Test the Integration

1. Go to your website contact form
2. Fill out all fields with test data
3. Click "Send Message"
4. Check your Google Sheet - a new row should appear!

---

## Troubleshooting

### Error: "Spreadsheet not found"
- **Solution**: Make sure you shared the sheet with the service account email (Step 6)

### Error: "Service account file not found"
- **Solution**: Verify the JSON file is at `/app/backend/service_account.json`

### Error: "Configuration error"
- **Solution**: Check that `GOOGLE_SHEET_ID` in `.env` is correct

### Error: "Permission denied"
- **Solution**: Ensure service account has "Editor" permission on the sheet

### Backend won't start
- **Solution**: Check backend logs with `tail -f /var/log/supervisor/backend.err.log`

---

## Security Best Practices

✅ **DO**:
- Keep `service_account.json` file secure and private
- Add it to `.gitignore`
- Use environment variables for all sensitive data
- Regularly review access logs

❌ **DON'T**:
- Commit service account JSON to version control
- Share service account credentials publicly
- Use the same service account for multiple unrelated projects

---

## Support

If you encounter issues:
1. Check backend logs: `tail -f /var/log/supervisor/backend.err.log`
2. Verify all environment variables are set correctly
3. Ensure Google Sheet is shared with service account
4. Test API endpoint directly: `curl -X POST http://localhost:8001/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","phone":"+15550000","message":"Test message"}'`

---

## What Happens Next?

Once configured:
1. Contact form submissions are automatically saved to your Google Sheet
2. Each submission includes timestamp, name, email, phone, and message
3. You can view, sort, and analyze submissions directly in Google Sheets
4. You can export data to Excel, PDF, or other formats as needed

**Your Financial Literacy Academy website is now fully functional!** 🎉
