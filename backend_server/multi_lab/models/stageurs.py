from django.db import models
from.stagedescription import OffreStage
class Stagieur(models.Model):
    CHOICES = (
        ('1', 'PFE'),
        ('2', 'PFA'),
       
    )
    titre = models.ForeignKey(OffreStage, on_delete=models.CASCADE, related_name='offre_stage')
    fullname = models.CharField('Nom et prénom',max_length=100)
    ville=models.CharField(max_length=100)
    type_stage = models.CharField(max_length=10, choices=CHOICES)
    numero_telephone=models.IntegerField('Numéro de téléphone')
    email = models.EmailField(max_length=254)
    cvfile = models.FileField('cv upload',upload_to='uploads/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fullname
   
    

    class Meta:
        verbose_name_plural="Liste des Stagiaires "
