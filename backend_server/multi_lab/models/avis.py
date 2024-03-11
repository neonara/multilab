from django.db import models

class Avis(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
    ]
    ETAT_CHOICES = [
        ('satisfait', 'Satisfait'),
        ('non_satisfait', 'Non Satisfait'),
    ]

    fullname = models.CharField('nom et prénom', max_length=100)
    nom_entreprise = models.CharField(max_length=100)
    
    
    numero_telephone = models.IntegerField()
    email = models.EmailField(max_length=254)
    etat = models.CharField('Etat du client', max_length=15, choices=ETAT_CHOICES, default='satisfait')
    pourquoi = models.CharField(max_length=250)
    status = models.CharField('Status', max_length=10, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fullname

    class Meta:
        verbose_name_plural = "List Avis Client"
