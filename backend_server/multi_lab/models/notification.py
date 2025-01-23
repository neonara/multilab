# models/notification.py
from django.db import models
from account.models import User
from.avis import Avis
from account.model.report import Report
class Notification(models.Model):
    recipient = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    avis = models.ForeignKey(Avis, on_delete=models.CASCADE, null=True, blank=True)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    report = models.ForeignKey(Report, on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        ordering = ['-created_at']
    def __str__(self):
        return f"Notification for {self.recipient.username}: {self.message}"