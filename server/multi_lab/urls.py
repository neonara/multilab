from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.avi import AvisViewSet
from .views.devi import DeviViewSet
from .views.project import ProjectViewSet
from .views.offres import OffresViewSet
from .views.stageur import StagieurViewSet
from .views.report import ReportViewSet
from .views.client import UserLoginAPIView, UserRegisterAPIView


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
router.register(r'repport', ReportViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', UserRegisterAPIView.as_view(), name='client_register'),
    path('login/', UserLoginAPIView.as_view(), name='client_login'),

   
    
]