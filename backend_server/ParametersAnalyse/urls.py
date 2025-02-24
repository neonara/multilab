from django.urls import path, include
from django.contrib import admin

from rest_framework.routers import DefaultRouter
from .views.TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVES import *
from .views.produitsalimentaires import *
from .views.physicochimiquesmiel import *
from .views.produits_laitiers import *
from .views.FROMAGE import *
from .views.TypeDeviBEURRE import *
from .views.produit_peche import *
from .views.produits_gras import *
from .views.microbiologie_produits_eaux import *
from .views.physicochimiques_produits_eaux import *
from .views.azote_kjedahl import *
from .views.alimentation_animale import *
from .views.AnalysesProduitCosmetique import *
router = DefaultRouter()

# Register all viewsets
router.register(r'physico-eaux',
                TypeAnalysesPhysicochimiquesProduitsEauxViewSet)
router.register(r'azote-kjedahl', TypeAzoteKjedahlViewSet)
router.register(r'aliments-animaux', TypeDeviViewSet)
router.register(r'micro-eaux', TypeDeviAnalyseMicrobiologieProduitsEauxViewSet)
router.register(r'physico-peche',
                TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSPECHEViewSet)
router.register(r'beurre', TypeDeviBEURREViewSet)
router.register(r'fromage', TypeDeviFROMAGEViewSet)
router.register(r'produits-laitiers',
                TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSViewSet)
router.register(r'miel', TypeDeviANALYSESPHYSICOCHIMIQUESMIELViewSet)
router.register(
    r'huiles', TypeDeviANALYSESPHYSICOCHIMIQUESHUILESETPRODUITSGRASViewSet)
router.register(
    r'viandes', TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVESViewSet)
router.register(r'micro-alimentaires',
                TypeDeviAnalysesmicrobiologiquesproduitsalimentairesViewSet)
router.register(r'cosmetiques-hygiene', AnalysesProduitCosmetiqueViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('analyse/', analyse, name='analyse'),
    path('viandesetderives_list/', TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVESCreateView.as_view(),
         name='viandesetderives_list'),
    path('viandesetderives/<int:pk>/delete/',
         TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVESDeleteView.as_view(), name='viandesetderives_delete'),
    path('viandesetderives/<int:pk>/update/',
         TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVESUpdateView.as_view(), name='viandesetderives_update'),
    # ? ----------------TypeDeviAnalysesmicrobiologiquesproduitsalimentaires----------------
    path('produitsalimentaires_list/', TypeDeviAnalysesmicrobiologiquesproduitsalimentairesCreateView.as_view(),
         name='produitsalimentaires_list'),
    path('produitsalimentaires/<int:pk>/delete/',
         TypeDeviAnalysesmicrobiologiquesproduitsalimentairesDeleteView.as_view(), name='produitsalimentaires_delete'),
    path('produitsalimentaires/<int:pk>/update/',
         TypeDeviAnalysesmicrobiologiquesproduitsalimentairesUpdateView.as_view(), name='produitsalimentaires_update'),
    # ? ----------------TypeDeviANALYSESPHYSICOCHIMIQUESMIEL----------------
    path('physicochimiques_miel_list/', TypeDeviANALYSESPHYSICOCHIMIQUESMIELCreateView.as_view(),
         name='physicochimiques_miel_list'),
    path('physicochimiques_miel/<int:pk>/delete/',
         TypeDeviANALYSESPHYSICOCHIMIQUESMIELDeleteView.as_view(), name='physicochimiques_miel_delete'),
    path('physicochimiques_miel/<int:pk>/update/',
         TypeDeviANALYSESPHYSICOCHIMIQUESMIELUpdateView.as_view(), name='physicochimiques_miel_update'),
    # ? ----------------TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERS----------------
    path('produits_laitiers_list/', TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSCreateView.as_view(),
         name='produits_laitiers_list'),
    path('produits_laitiers/<int:pk>/delete/',
         TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSDeleteView.as_view(), name='produits_laitiers_delete'),
    path('produits_laitiers/<int:pk>/update/',
         TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSUpdateView.as_view(), name='produits_laitiers_update'),
    # ? ----------------TypeDeviFROMAGE----------------
    path('type_fromage_list/', TypeDeviFROMAGECreateView.as_view(),
         name='type_fromage_list'),
    path('type_fromage/<int:pk>/delete/',
         TypeDeviFROMAGEDeleteView.as_view(), name='type_fromage_delete'),
    path('type_fromage/<int:pk>/update/',
         TypeDeviFROMAGEUpdateView.as_view(), name='type_fromage_update'),
    # ? ----------------TypeDeviBEURRE----------------
    path('produits_beurre_list/', TypeDeviBEURRECreateView.as_view(),
         name='produits_beurre_list'),
    path('produits_beurre/<int:pk>/delete/',
         TypeDeviBEURREDeleteView.as_view(), name='produits_beurre_delete'),
    path('produits_beurre/<int:pk>/update/',
         TypeDeviBEURREUpdateView.as_view(), name='produits_beurre_update'),
    # ? ----------------TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSPECHE----------------
    path('produit_peche_list/', TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSPECHECreateView.as_view(),
         name='produit_peche_list'),
    path('produit_peche/<int:pk>/delete/',
         TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSPECHEDeleteView.as_view(), name='produit_peche_delete'),
    path('produit_peche/<int:pk>/update/',
         TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSPECHEpdateView.as_view(), name='produit_peche_update'),
    # ? ----------------TypeDeviANALYSESPHYSICOCHIMIQUESHUILESETPRODUITSGRAS----------------
    path('produits_gras_list/', TypeDeviANALYSESPHYSICOCHIMIQUESHUILESETPRODUITSGRASCreateView.as_view(),
         name='produits_gras_list'),
    path('produits_gras/<int:pk>/delete/',
         TypeDeviANALYSESPHYSICOCHIMIQUESHUILESETPRODUITSGRASDeleteView.as_view(), name='produits_gras_delete'),
    path('produits_gras/<int:pk>/update/',
         TypeDeviANALYSESPHYSICOCHIMIQUESHUILESETPRODUITSGRASUpdateView.as_view(), name='produits_gras_update'),
    # ? ----------------TypeDeviAnalyseMicrobiologieProduitsEaux----------------
    path('microbiologie_produits_eaux_list/', TypeDeviAnalyseMicrobiologieProduitsEauxCreateView.as_view(),
         name='microbiologie_produits_eaux_list'),
    path('microbiologie_produits_eaux/<int:pk>/delete/',
         TypeDeviAnalyseMicrobiologieProduitsEauxDeleteView.as_view(), name='microbiologie_produits_eaux_delete'),
    path('microbiologie_produits_eaux/<int:pk>/update/',
         TypeDeviAnalyseMicrobiologieProduitsEauxUpdateView.as_view(), name='microbiologie_produits_eaux_update'),
    # ? ----------------TypeAnalysesPhysicochimiquesProduitsEaux----------------
    path('physicochimiques_produits_eaux_list/', TypeAnalysesPhysicochimiquesProduitsEauxCreateView.as_view(),
         name='physicochimiques_produits_eaux_list'),
    path('physicochimiques_produits_eaux/<int:pk>/delete/',
         TypeAnalysesPhysicochimiquesProduitsEauxDeleteView.as_view(), name='physicochimiques_produits_eaux_delete'),
    path('physicochimiques_produits_eaux/<int:pk>/update/',
         TypeAnalysesPhysicochimiquesProduitsEauxUpdateView.as_view(), name='physicochimiques_produits_eaux_update'),
    # ? ----------------TypeAzoteKjedahl----------------
    path('azote_kjedahl_list/', TypeAzoteKjedahlCreateView.as_view(),
         name='azote_kjedahl_list'),
    path('azote_kjedahl/<int:pk>/delete/',
         TypeAzoteKjedahlDeleteView.as_view(), name='azote_kjedahl_delete'),
    path('azote_kjedahl/<int:pk>/update/',
         TypeAzoteKjedahlUpdateView.as_view(), name='azote_kjedahl_update'),
    # ? ----------------Analyses de l’alimentation animale----------------
    path('alimentation_animale_list/', TypeAalimentation_animalelCreateView.as_view(),
         name='alimentation_animale_list'),
    path('alimentation_animale/<int:pk>/delete/',
         Typealimentation_animalelDeleteView.as_view(), name='alimentation_animale_delete'),
    path('alimentation_animale/<int:pk>/update/',
         Typealimentation_animaleUpdateView.as_view(), name='alimentation_animale_update'),
    #  ?------------------------ produit_cosmetique--------------------------------
    path('produit_cosmetique_list/', TypeAnalysesProduitCosmetiqueCreateView.as_view(),
         name='produit_cosmetique_list'),

    path('analyses/produit-cosmetique/update/<int:pk>/',
         Typealimentation_animaleUpdateView.as_view(),
         name='produit_cosmetique_update'),

    path('analyses/produit-cosmetique/delete/<int:pk>/',
         Typealimentation_animalelDeleteView.as_view(),
         name='produit_cosmetique_delete'),

]