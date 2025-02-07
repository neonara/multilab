import random
from django.conf import settings
from django.core.mail import EmailMessage
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.exceptions import ValidationError
from .models import User
from django.core.mail import send_mail

def send_contact_form_email(name,company_name, email, phone, subject, message):

    email_subject = f"Objet du message: {subject}"
    email_message = (
        f"Nom et Prénom: {name}\n"
        f"Nom de l'entreprise: {company_name}\n"
        f"Email: {email}\n"
        f"Numéro de téléphone: {phone}\n\n"
        f"Message:\n{message}"
    )

    try:
        send_mail(
            email_subject,
            email_message,
            'multilab@planet.tn',  # From email (OVH email)
            # To email (where you receive contact form submissions)
            ['multilab@planet.tn'],
            fail_silently=False,
        )
    except Exception as e:
        print(f"Error while sending email: {e}")
        raise e
