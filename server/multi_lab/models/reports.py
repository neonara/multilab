from django.db import models
from .clients import Clients

class Report(models.Model):
    client_id = models.ForeignKey(Clients, on_delete=models.CASCADE, related_name='reports')
    title = models.CharField(max_length=100)
    file = models.FileField(upload_to='uploads/')
    created_at = models.DateTimeField(auto_now_add=True)
    # Other fields for report details
    
    def __str__(self):
        return self.title
