from django.urls import path, include
from django.contrib import admin

from rest_framework.routers import DefaultRouter
from .views.TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVES import *
from .views.produitsalimentaires import *
from.views.physicochimiquesmiel import *
from.views.produits_laitiers import *
router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('analyse/', analyse, name='analyse'),
    path('viandesetderives_list/', TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVESCreateView.as_view(), name='viandesetderives_list'),
    path('viandesetderives/<int:pk>/delete/', TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVESDeleteView.as_view(), name='viandesetderives_delete'),
    path('viandesetderives/<int:pk>/update/', TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVESUpdateView.as_view(), name='viandesetderives_update'),
  #! ----------------TypeDeviAnalysesmicrobiologiquesproduitsalimentaires----------------
    path('produitsalimentaires_list/', TypeDeviAnalysesmicrobiologiquesproduitsalimentairesCreateView.as_view(), name='produitsalimentaires_list'),
    path('produitsalimentaires/<int:pk>/delete/', TypeDeviAnalysesmicrobiologiquesproduitsalimentairesDeleteView.as_view(), name='produitsalimentaires_delete'),
    path('produitsalimentaires/<int:pk>/update/', TypeDeviAnalysesmicrobiologiquesproduitsalimentairesUpdateView.as_view(), name='produitsalimentaires_update'),
    #! ----------------TypeDeviANALYSESPHYSICOCHIMIQUESMIEL----------------
    path('physicochimiques_miel_list/', TypeDeviANALYSESPHYSICOCHIMIQUESMIELCreateView.as_view(), name='physicochimiques_miel_list'),
    path('physicochimiques_miel/<int:pk>/delete/', TypeDeviANALYSESPHYSICOCHIMIQUESMIELDeleteView.as_view(), name='physicochimiques_miel_delete'),
    path('physicochimiques_miel/<int:pk>/update/', TypeDeviANALYSESPHYSICOCHIMIQUESMIELUpdateView.as_view(), name='physicochimiques_miel_update'),
    #! ----------------TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERS----------------
    path('produits_laitiers_list/', TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSCreateView.as_view(), name='produits_laitiers_list'),
    path('produits_laitiers/<int:pk>/delete/', TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSDeleteView.as_view(), name='produits_laitiers_delete'),
    path('produits_laitiers/<int:pk>/update/', TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSUpdateView.as_view(), name='produits_laitiers_update'),



]