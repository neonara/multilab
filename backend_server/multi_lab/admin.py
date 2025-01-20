from django.contrib import admin
from django.utils.html import format_html
# Register your models here.
from.models.avis import Avis


from.models.offres import Offre
from.models.stageurs import Stagieur
from.models.jobdescription import Offre_description
from.models.projects import Project
from.models.stagedescription import OffreStage
from .models.condidat_semplife import Candidate_simplify
class AvisConfig(admin.ModelAdmin):
    
    list_display=['fullname','nom_entreprise','created_at']
    list_filter=['fullname','nom_entreprise']
    search_fields=('fullname',)

class OffreConfig(admin.ModelAdmin):
     
    list_display=['fullname','titre','email','numero_telephone','transport','created_at']
    list_filter=['titre','transport']
    search_fields=('fullname','titre',)  
class ProjectConfig(admin.ModelAdmin):
    
    list_display=['title','image_tag','description','created_at']
    list_filter=['title']
    search_fields=('title',)
    def image_tag(self, obj):
        return format_html('<img src="{0}" width="100" height="100" />'.format(obj.image.url))
    
    image_tag.short_description = 'Image'
      
    
class Offre_descriptionConfig(admin.ModelAdmin):
     
    list_display=['titre','departement','experience','temps','contrat','created_at']
    list_filter=['titre','contrat']
    search_fields=('titre','departement') 
class OffreStageConfig(admin.ModelAdmin):
     
    list_display=['titre','departement','type_stage','created_at']
    list_filter=['titre','type_stage']
    search_fields=('titre',) 
class StagieurConfig(admin.ModelAdmin):
     
    list_display=['titre','fullname','email','ville','type_stage','created_at']
    list_filter=['titre','type_stage']
    search_fields=('titre',) 
    
admin.site.register(Avis,AvisConfig)



admin.site.register(Offre_description,Offre_descriptionConfig)
admin.site.register(Offre,OffreConfig)
admin.site.register(OffreStage,OffreStageConfig)
admin.site.register(Stagieur,StagieurConfig)

admin.site.register(Project,ProjectConfig)
admin.site.register(Candidate_simplify)