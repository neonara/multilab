from django.db import models
from account.models import User

from django.core.exceptions import ValidationError


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
        Report, on_delete=models.CASCADE, related_name='files')
    file = models.FileField(upload_to='reports_pdf/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def clean(self):
        """Ensure no more than 3 files are associated with a single report."""
        if self.report_related and self.report_related.files.count() >= 3:
            raise ValidationError("A report can only have up to 3 files.")

    def __str__(self):
        return f"Fichier pour {self.report_related.title}"

    class Meta:
        verbose_name = "Fichier de Rapport"
        verbose_name_plural = "Liste des Fichiers des Rapports"
