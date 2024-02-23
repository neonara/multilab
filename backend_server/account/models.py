from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
   is_admin = models.BooleanField('Is admin',default=False)
   is_client = models.BooleanField('Is client',default=False)
   is_moderator = models.BooleanField('Is moderator',default=False)
   def __str__(self):
     return self.username
	