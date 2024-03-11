from django.db import models

class Avis(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    fullname = models.CharField('nom et prénom',max_length=100)
    nom_entreprise = models.CharField(max_length=100)
    message=models.CharField(max_length=250)
    
    numero_telephone=models.IntegerField()
    email = models.EmailField(max_length=254)
    etat=models.CharField(max_length=100)
    pourquoi=models.CharField(max_length=250)
    status = models.CharField('Status', max_length=10, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.fullname
    class Meta:
        verbose_name_plural="List Avis Client"