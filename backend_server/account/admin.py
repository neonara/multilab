from django.contrib import admin
from .models import User
from.model.report import Report
# Register your models here.
admin.site.register(User)
admin.site.register(Report)