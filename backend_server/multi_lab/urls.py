from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.avi import *
from .views.devi import *
from .views.project import ProjectViewSet
from .views.offres import *
from .views.stageur import *
from.views.job import Offre_descriptionViewSet
from.views.offrestage import *
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
   
    path('avis_list/', AvisListView.as_view(), name='avis_list'),
    path('avis/<int:pk>/update/', AvisUpdateView.as_view(), name='avis_update'),
    path('avis/<int:pk>/delete/', AvisDeleteView.as_view(), name='avis_delete'),
    # devi routes
    path('devi_list/', DeviListView.as_view(), name='devi_list'),
    path('devi/<int:pk>/update/', DeviUpdateView.as_view(), name='devi_update'),
    path('devi/<int:pk>/delete/', DeviDeleteView.as_view(), name='devi_delete'),
    # stage routes
     path('stage_list/', OffreStageListView.as_view(), name='stage_list'),
    path('stage_condidat_list/', stage_list_view, name='stage_condidat_list'), 
    path('stage_list/<int:pk>/', OffreStageDetailView.as_view(), name='stage_detail'),
    path('stage_list/<int:pk>/delete/', OffreStageDeleteView.as_view(), name='stage_delete'),
    path('stage_list/create/', OffreStageCreateView.as_view(), name='stage_create'),
   
    
]