import smtplib

try:
    server = smtplib.SMTP('ssl0.ovh.net', 587)
    server.set_debuglevel(1)  # Enable debugging
    server.starttls()
    server.login('nour.d@neonara.digital', 's,5LVz(9F')
    server.sendmail(
        'nour.d@neonara.digital',
        'nourderouich159@gmail.com',
        'Subject: Test Email\n\nThis is a test email from Django.'
    )
    print("Email sent successfully!")
    server.quit()
except Exception as e:
    print("Failed to send email:", str(e))
