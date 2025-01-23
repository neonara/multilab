from django.db import models
from django.utils.html import mark_safe

class Event(models.Model):
    STATUS_CHOICES = (
       
        ('published', 'Publié'),
        ('archived', 'Privé'),
    )
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    date_event = models.DateTimeField()
    image = models.ImageField(upload_to='events/', blank=True, null=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
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
        verbose_name_plural = "Multi Lab Events"

class EventArticle(models.Model):
    event = models.ForeignKey(Event, related_name='articles', on_delete=models.CASCADE)
    description = models.TextField()
    image1 = models.ImageField(upload_to='event_articles/')
    image2 = models.ImageField(upload_to='event_articles/', null=True, blank=True)
    image3 = models.ImageField(upload_to='event_articles/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Article for {self.event.title}"
    def admin_image(self):
        if self.image:
            return mark_safe('<img src="%s" width="150" height="150" />' % self.image1.url)
        else:
            return 'No Image'

    admin_image.short_description = 'Image1'
    admin_image.allow_tag=True