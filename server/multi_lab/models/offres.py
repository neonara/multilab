from django.db import models

class Offres(models.Model):
    fullname = models.CharField(max_length=100)
    ville=models.CharField(max_length=100)
    numero_telephone=models.IntegerField()
    email = models.EmailField(max_length=254)
    cvfile = models.FileField(upload_to='uploads/')
    transport=models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.fullname