from django.db import models
from.jobdescription import Offre_description
class Offre(models.Model):
    CHOICES = (
        ('1', 'oui'),
        ('2', 'Non motorisé'),
       
    )
    titre = models.ForeignKey(Offre_description, on_delete=models.CASCADE, related_name='offre_emploi')

    fullname = models.CharField('nom et prénom',max_length=100)
    ville=models.CharField(max_length=100)
    numero_telephone=models.IntegerField('Numéro de téléphone')
    email = models.EmailField(max_length=254)
    cvfile = models.FileField('CV upload',upload_to='uploads/')
    transport= models.CharField('Motorisé ?',max_length=10, choices=CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.titre)
   
    class Meta:
        verbose_name_plural="Liste candidat"