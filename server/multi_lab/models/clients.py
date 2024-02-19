from django.db import models

class Clients(models.Model):
    fullname = models.CharField(max_length=100)
    nom_entreprise = models.CharField(max_length=100) 
    numero_telephone=models.IntegerField()
    email = models.EmailField(max_length=254)
    password=models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.fullname