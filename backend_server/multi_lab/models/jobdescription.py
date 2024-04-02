from django.db import models

class Offre_description(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    CHOICES = (
        ('1', 'Temps plein'),
        ('2', 'Partiel'),
       
    )
    CHOICESContrat = (
        ('CIVP', 'CIVP'),
        ('CDI', 'CDI'),
        ('CDD', 'CDD'),
        ('Karama', 'Karama'),
        ('CSC', 'CSC'),
       
    )
    titre = models.CharField('Nom du Post',max_length=100)
    departement = models.CharField('département',max_length=100)
    description=models.CharField(max_length=250)
    temps= models.CharField(max_length=10, choices=CHOICES)
    contrat= models.CharField(max_length=10, choices=CHOICESContrat)
    status = models.CharField('Status', max_length=10, choices=STATUS_CHOICES, default='pending')
    experience=models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.titre)
    
    class Meta:
        verbose_name_plural="List d'offre d'emploi"