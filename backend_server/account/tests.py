from django.test import TestCase

# Create your tests here.
from django.http import HttpResponse
from .utils.email_utils import send_email

def test_send_email(request):
    subject = 'Test Email'
    template_path = './moderator/report/test_email.html'
    context = {'report': 'Test report'}
    recipient_list = ['nour.d@neonara.digital']
    send_email(subject, template_path, context, recipient_list)
    return HttpResponse("Test email sent.")
