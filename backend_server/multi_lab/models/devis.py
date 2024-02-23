from django.db import models

class Devi(models.Model):
    CHOICES = (
        ('1', 'Microbiologie'),
        ('2', 'Physicochimie'),
       
    )
    fullname = models.CharField(max_length=100)
    nom_entreprise = models.CharField(max_length=100)
    poste=models.CharField(max_length=250)
    numero_telephone=models.IntegerField()
    email = models.EmailField(max_length=254)
    parametre_analyes=models.CharField(max_length=254)
    type_debis= models.CharField(max_length=10, choices=CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.fullname