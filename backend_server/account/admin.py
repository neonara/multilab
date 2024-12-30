from django.contrib import admin
from .models import User
from.model.report import Report
# Register your models here.
class UserConfig(admin.ModelAdmin):
    change_form_template = "admin/userpassword.html"
    
    fields=['first_name','last_name','email','username','password','nom_entreprise','is_client','is_moderator','groups','user_permissions','is_staff','is_active','last_login','date_joined']
    list_display=['username','first_name','last_name','nom_entreprise','is_active','is_client','is_moderator']
    list_filter=['is_client','is_moderator','nom_entreprise']
    search_fields=('first_name',)

class RaportConfig(admin.ModelAdmin):
   
    
    list_display=['title','client','file','created_at']
    list_filter=['title','client']
    search_fields=('title','client')  



admin.site.register(User,UserConfig)
admin.site.register(Report,RaportConfig)