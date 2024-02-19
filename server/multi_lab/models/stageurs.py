from django.db import models

class Stagieur(models.Model):
    fullname = models.CharField(max_length=100)
    ville=models.CharField(max_length=100)
    type_stage=models.CharField(max_length=100)
    numero_telephone=models.IntegerField()
    email = models.EmailField(max_length=254)
    cvfile = models.FileField(upload_to='uploads/')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.fullname
