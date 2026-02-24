import os
import sys
import pytest
from unittest.mock import patch
import html

# Add current directory to path to allow importing api
sys.path.append(os.getcwd())

# Set dummy env vars for testing
os.environ["SENDGRID_API_KEY"] = "test_key"
os.environ["NOTION_TOKEN"] = "test_token"
os.environ["NOTION_DATABASE_ID"] = "test_db_id"

from fastapi.testclient import TestClient
from api.index import app

client = TestClient(app)

def test_contact_form_html_injection():
    """
    Test that HTML injection in contact form fields is escaped.
    """

    # Mock the send_email function to verify its arguments
    with patch("api.routers.contact.send_email") as mock_send_email:
        # malicious payload
        payload = {
            "email": "hacker@example.com",
            "subject": "<h1>Important</h1>",
            "message": "<script>alert('xss')</script>"
        }

        response = client.post("/api/py/contact", json=payload)

        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"

        # Check that send_email was called
        assert mock_send_email.called

        # Find the call to admin (to utdallas@consultyourcommunity.org)
        admin_call_args = None
        for call in mock_send_email.call_args_list:
            args, _ = call
            if args[0] == "utdallas@consultyourcommunity.org":
                admin_call_args = args
                break

        assert admin_call_args is not None, "Admin email was not sent"

        recipient, subject, content = admin_call_args

        print(f"Subject: {subject}")
        print(f"Content: {content}")

        # Check for vulnerability (unescaped HTML)
        if "<h1>" in subject:
             pytest.fail("VULNERABILITY DETECTED: Subject is not escaped! Found <h1>")

        if "<script>" in content:
             pytest.fail("VULNERABILITY DETECTED: Message content is not escaped! Found <script>")

        # Check that it IS escaped correctly
        assert html.escape("<h1>Important</h1>") in subject
        assert html.escape("<script>alert('xss')</script>") in content
