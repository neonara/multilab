from django.db import models

class OffreStage(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    CHOICES = (
        ('1', 'PFE'),
        ('2', 'Stage Mémoire'),
       
    )
    

    titre = models.CharField('Nom du Poste',max_length=100)
    departement = models.CharField('département',max_length=100)
    description=models.CharField(max_length=250)
    type_stage = models.CharField(max_length=10, choices=CHOICES)
    status = models.CharField('Status', max_length=10, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.titre)
   
    class Meta:
        verbose_name_plural="List d'offre du stage"