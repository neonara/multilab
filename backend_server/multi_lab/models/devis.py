from django.db import models

class Devi(models.Model):
    CHOICES = (
        ('microbiologie', 'Microbiologie'),
        ('physicochimie', 'Physicochimie'),
       
    )
    fullname = models.CharField('nom et prénom',max_length=100)
    nom_entreprise = models.CharField(max_length=100)
    poste=models.CharField(max_length=250)
    numero_telephone=models.IntegerField('Numéro de téléphone')
    email = models.EmailField(max_length=254)
    parametre_analyes=models.CharField(max_length=254)
    type_debis= models.CharField(max_length=20, choices=CHOICES,default='physicochimie')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.fullname
    class Meta:
        verbose_name_plural="List Devis Client"