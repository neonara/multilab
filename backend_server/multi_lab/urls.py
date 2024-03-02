from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.avi import AvisViewSet
from .views.devi import DeviViewSet
from .views.project import ProjectViewSet
from .views.offres import OffresViewSet
from .views.stageur import StagieurViewSet
from.views.job import Offre_descriptionViewSet
from.views.offrestage import OffreStageViewSet

#routes URLCOF
router = DefaultRouter()
router.register(r'avis', AvisViewSet)
# 
router.register(r'project', ProjectViewSet)
# 
router.register(r'devi', DeviViewSet)
# 
router.register(r'offre', OffresViewSet)
# 
router.register(r'stageur', StagieurViewSet)
#
router.register(r'stage', OffreStageViewSet)
#
router.register(r'job', Offre_descriptionViewSet)

urlpatterns = [
    path('', include(router.urls)),
   

   
    
]