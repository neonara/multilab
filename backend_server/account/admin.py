from django.contrib import admin
from .models import User
from.model.report import Report ,ReportFile
# Register your models here.
class UserConfig(admin.ModelAdmin):
    change_form_template = "admin/userpassword.html"
    
    fields=['first_name','last_name','email','username','password','nom_entreprise','is_client','is_moderator','groups','user_permissions','is_staff','is_active','last_login','date_joined']
    list_display=['username','first_name','last_name','nom_entreprise','is_active','is_client','is_moderator']
    list_filter=['is_client','is_moderator','nom_entreprise']
    search_fields=('first_name',)


class ReportAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'status', 'client', 'created_at', 'display_files','description')
    
    # Custom method to display associated files
    def display_files(self, obj):
        return ', '.join([file.file.name for file in obj.files.all()])
    display_files.short_description = 'Files'



admin.site.register(User,UserConfig)
admin.site.register(Report, ReportAdmin)
admin.site.register(ReportFile)