from django.db import models
from account.models import User
from django.utils import timezone
import os
import uuid

def rapport_pdf_path(instance, filename):
    timestamp = timezone.now().strftime('%Y%m%d%H%M%S')
    ext = filename.split('.')[-1]
    new_filename = f'reports_{instance.report_related.pk}_{timestamp}_{uuid.uuid4()}.{ext}'
    return os.path.join('reports_pdf', new_filename)

class Report(models.Model):
    STATUS_CHOICES = [
        ('pending', 'En cours'),
        ('approved', 'Livrée'),
    ]
    
    client = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='client_reports'
    )
    description = models.CharField(max_length=250)
    title = models.CharField(max_length=100)
    status = models.CharField(
        'Status', 
        max_length=10, 
        choices=STATUS_CHOICES, 
        default='pending'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - {self.client.username}"

    class Meta:
        verbose_name = "Rapport"
        verbose_name_plural = "Liste des Rapports"

class ReportFile(models.Model):
    report_related = models.ForeignKey(
        Report, 
        on_delete=models.CASCADE, 
        related_name='files'
    )
    file = models.FileField(
        'Upload rapport', 
        upload_to=rapport_pdf_path
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Fichier pour {self.report_related.title}"

    class Meta:
        verbose_name = "Fichier de Rapport"
        verbose_name_plural = "Liste des Fichiers des Rapports"