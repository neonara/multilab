from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
import logging

logger = logging.getLogger(__name__)


def send_email(subject, template_path, context, recipient_list, from_email='commercial@multilab.com.tn'):

    try:
        # Render the email content
        html_message = render_to_string(template_path, context)
        plain_message = strip_tags(html_message)

        # Send the email
        send_mail(subject, plain_message, from_email,
                  recipient_list, html_message=html_message)
    except Exception as e:
        # Log the error (optional)
        print(f"Error sending email: {e}")
        raise
