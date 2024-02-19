from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.avi import AvisViewSet
from .views.devi import DeviViewSet
from .views.project import ProjectViewSet
from .views.offres import OffresViewSet
from .views.stageur import StagieurViewSet
from .views.client import ClientsViewSet, register, authentication_test, authentication_details,generate_token

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
client_router = DefaultRouter()
client_router.register(r'clients', ClientsViewSet)

urlpatterns = [
    path('', include(router.urls)),
     path('register/', register),
    path('auth-test/', authentication_test),
    path('auth-details/', authentication_details),
     path('token/', generate_token),
    path('', include(client_router.urls)),

]