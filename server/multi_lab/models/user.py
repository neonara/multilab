from django.db import models
from django.contrib.auth.models import AbstractUser,User
#from django.contrib.auth.models import AbstractUser

#from django.utils.html import escape, make_safe

# Create your models here.
class CustomUser(AbstractUser):
	is_admin = models.BooleanField('Is admin',default=False)
	is_client = models.BooleanField('Is client',default=False)
	is_moderator = models.BooleanField('Is moderator',default=False)
	nom_entreprise = models.CharField(max_length=100) 
	created_at = models.DateTimeField(auto_now_add=True)
	
	def __str__(self):
		return self.username
	
