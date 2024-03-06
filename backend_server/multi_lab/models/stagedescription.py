from django.db import models

class OffreStage(models.Model):
    CHOICES = (
        ('1', 'PFE'),
        ('2', 'Stage Mémoire'),
       
    )
    

    titre = models.CharField('Nom du Stage',max_length=100)
    departement = models.CharField('département',max_length=100)
    description=models.CharField(max_length=250)
    type_stage = models.CharField(max_length=10, choices=CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    # is_public = models.BooleanField(default=False)
   
    class Meta:
        verbose_name_plural="List d'offre du stage"