from django.db import models
from django.utils.html import mark_safe

class Project(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
       
    ]
    title = models.CharField('Titre Projet', max_length=100)
    image = models.ImageField(upload_to='project_images/')
    description = models.TextField()
    status = models.CharField('Status', max_length=10, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def admin_image(self):
        if self.image:
            return mark_safe('<img src="%s" width="150" height="150" />' % self.image.url)
        else:
            return 'No Image'

    admin_image.short_description = 'Image'
    admin_image.allow_tag=True

    class Meta:
        verbose_name_plural = "Multi Lab Projects"
