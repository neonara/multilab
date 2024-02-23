from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='project_images/')
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title