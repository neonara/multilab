from django.db import models
from django.utils.html import mark_safe

class Persation(models.Model):
    STATUS_CHOICES = (
       
        ('published', 'Publié'),
        ('archived', 'Privé'),
    )
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='persations/', null=True, blank=True)
    icon_image = models.ImageField(upload_to='persations/ ', null=True, blank=True)
    link_description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='archived')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

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
        ordering = ['-created_at']
        verbose_name_plural = "MULTILAB a.s Perstations"