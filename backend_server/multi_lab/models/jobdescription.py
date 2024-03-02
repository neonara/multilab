from django.db import models

class Offre_description(models.Model):
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
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural="List d'offre d'emploi"