from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.avi import *
from .views.devi import *
from .views.project import *
from .views.offres import *
from .views.stageur import *
from.views.job import *
from.views.offrestage import *
#routes URLCOF
router = DefaultRouter()
router.register(r'avis', AvisViewSet)
# 
router.register(r'project', ProjectViewSet)
# 
router.register(r'devi', DeviViewSet)
# 

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
    path('avis_create/', AvisCreateView.as_view(), name='avis_create'),
    path('avis/<int:pk>/update/', AvisUpdateView.as_view(), name='avis_update'),
    path('avis/<int:pk>/delete/', AvisDeleteView.as_view(), name='avis_delete'),
   
    #? devi routes
    path('devi_list/', DeviListView.as_view(), name='devi_list'),
   
   
    #? stage routes
     path('stage_list/', OffreStageCreateView.as_view(), name='stage_list'),

   
    path('stage_list/<int:pk>/delete/', OffreStageDeleteView.as_view(), name='stage_delete'),
    path('stage/<int:pk>/update/', OffreStageUpdateView.as_view(), name='stage_update'),
    path('stage_list/create/', OffreStageCreateView.as_view(), name='stage_create'),
    #? stageur
        path('stage_condidat_list/', StagieurView.as_view(), name='stage_condidat_list'), 
        
   #?job routes
   path('job_list/', Offre_descriptionCreateView.as_view(), name='job_list'),
   path('job_list/<int:pk>/', Offre_descriptionDetailView.as_view(), name='job_detail'),
    path('job_list/<int:pk>/delete/', Offre_descriptionDeleteView.as_view(), name='job_delete'),
    path('job/<int:pk>/update/', Offre_descriptionUpdateView.as_view(), name='job_update'),
    #?condidat routes
    path('condidat_list/', CondidatListView.as_view(), name='condidat_list'),
    #? project routes
    path('project_list/', ProjectCreateView.as_view(), name='project_list'),
    path('project_list/<int:pk>/delete/', ProjectDeleteView.as_view(), name='project_delete'),
    path('project/<int:pk>/update/', ProjectUpdateView.as_view(), name='project_update'),
   
]