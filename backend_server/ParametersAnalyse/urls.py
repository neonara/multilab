from django.urls import path, include
from django.contrib import admin

from rest_framework.routers import DefaultRouter
from .views.TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVES import *

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('analyse/', analyse, name='analyse'),
    path('viandesetderives_list/', TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVESCreateView.as_view(), name='viandesetderives_list'),
    path('viandesetderives/<int:pk>/delete/', TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVESUpdateView.as_view(), name='viandesetderives_delete'),
    path('viandesetderives/<int:pk>/update/', TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVESDeleteView.as_view(), name='viandesetderives_update'),
  
]