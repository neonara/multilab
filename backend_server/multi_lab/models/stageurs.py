from django.db import models

class Stagieur(models.Model):
    CHOICES = (
        ('1', 'PFE'),
        ('2', 'PFA'),
       
    )
    fullname = models.CharField(max_length=100)
    ville=models.CharField(max_length=100)
    type_stage = models.CharField(max_length=10, choices=CHOICES)
    numero_telephone=models.IntegerField()
    email = models.EmailField(max_length=254)
    cvfile = models.FileField(upload_to='uploads/')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.fullname
