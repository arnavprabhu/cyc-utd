from api.core.email import send_email
from api.models.contact_form import ContactForm
from fastapi import APIRouter, HTTPException
import html

router = APIRouter()

EMAIL_TEMPLATES = {
    "contact_form": """
        Someone has filled out the contact form on the CYC UT Dallas website. Here are the details:<br><br>
        Email: {}<br>Subject: {}<br>Message: {}<br>
    """,
    "confirmation": """
        <p>Thank you for contacting Consult Your Community UT Dallas. We've received your message.</p>
        <p>This is a no-reply email. For further inquiries, email <a href="mailto:utdallas@consultyourcommunity.org">utdallas@consultyourcommunity.org</a>.</p>
        <p>Best regards,<br>Consult Your Community UT Dallas Team</p>
        <a href="https://utdcyc.com">utdcyc.com</a>
    """,
}

@router.post("/api/py/contact")
def submit_contact_form(contact_form: ContactForm):
    try:
        # Sanitize inputs to prevent HTML injection in emails
        safe_email = html.escape(contact_form.email)
        safe_subject = html.escape(contact_form.subject)
        safe_message = html.escape(contact_form.message)

        send_email(contact_form.email, "Thank you for contacting CYC UT Dallas", EMAIL_TEMPLATES["confirmation"])
        send_email(
            "utdallas@consultyourcommunity.org", 
            safe_subject,
            EMAIL_TEMPLATES["contact_form"].format(safe_email, safe_subject, safe_message)
        )
        return {"message": "Email sent successfully"}
    except Exception as e:
        # Log the error internally but don't expose details to client
        print(f"Error processing contact form: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
