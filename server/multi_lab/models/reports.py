from django.db import models

from django import forms
class Report(models.Model):
    CHOICES = (
        ('1', 'Disponible'),
        ('2', 'EN COURS'),
       
    )
    
    title = models.CharField(max_length=100)
    file = models.FileField(upload_to='uploads/')
    statut = models.CharField(max_length=10, choices=CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    # Other fields for report details
    
    def __str__(self):
        return self.title
