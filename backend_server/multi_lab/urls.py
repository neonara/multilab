from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.avi import AvisViewSet
from .views.devi import DeviViewSet
from .views.project import ProjectViewSet
from .views.offres import OffresViewSet
from .views.stageur import StagieurViewSet



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


urlpatterns = [
    path('', include(router.urls)),
   

   
    
]