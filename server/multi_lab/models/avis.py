from django.db import models

class Avis(models.Model):
    fullname = models.CharField(max_length=100)
    nom_entreprise = models.CharField(max_length=100)
    message=models.CharField(max_length=250)
    
    numero_telephone=models.IntegerField()
    email = models.EmailField(max_length=254)
    etat=models.CharField(max_length=100)
    pourquoi=models.CharField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.fullname