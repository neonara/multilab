from django.db import models
from django.core.validators import FileExtensionValidator

class Candidate_simplify(models.Model):
    fullname = models.CharField(max_length=100)
    description = models.CharField()
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    file1 = models.FileField(
        upload_to='candidates/files/',
        validators=[FileExtensionValidator(['pdf', 'zip'])],
        help_text="Upload PDF or ZIP file"
    )
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fullname
    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Simplified Candidates"
