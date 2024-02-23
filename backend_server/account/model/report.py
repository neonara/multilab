from django.db import models
from account.models import User

class Report(models.Model):
    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name='client_reports')
    # Add other fields related to your report
    title = models.CharField(max_length=100)
    file = models.FileField(upload_to='uploads/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Report: {self.title} by {self.client.username}"
