from django.db import models
from ParametersAnalyse.models import *

class Devi(models.Model):
    CHOICES = (
        ('microbiologie', 'Microbiologie'),
        ('physicochimie', 'Physicochimie'),
        ('Alimentation_Animale', 'Alimentation Animale'),
    )

    fullname = models.CharField('nom et prénom', max_length=100 ,blank=True)
    nom_entreprise = models.CharField(max_length=100 ,blank=True)
    poste = models.CharField(max_length=250,blank=True)
    numero_telephone = models.CharField('Numéro de téléphone', max_length=20 ,blank=True)
    email = models.EmailField(max_length=254,blank=True)
    parametre_analyes = models.CharField(max_length=254 ,blank=True)

    # Define many-to-many fields properly
    type_ANALYSESPHYSICOCHIMIQUESHUILESETSGRAS = models.ManyToManyField(TypeDeviANALYSESPHYSICOCHIMIQUESHUILESETPRODUITSGRAS, related_name='devis_ANALYSESPHYSICOCHIMIQUESHUILESETSGRAS',blank=True)
    type_YSESPHYSICOCHIMIQUESPRODUITSLAITIERS = models.ManyToManyField(TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERS, related_name='devis_YSESPHYSICOCHIMIQUESPRODUITSLAITIERS',blank=True)
    type_ANALYSESPHYSICOCHIMIQUESMIEL = models.ManyToManyField(TypeDeviANALYSESPHYSICOCHIMIQUESMIEL, related_name='devis_ANALYSESPHYSICOCHIMIQUESMIEL',blank=True)
    type_FROMAGE = models.ManyToManyField(TypeDeviFROMAGE, related_name='devis_FROMAGE',blank=True)
    type_ANALYSESPHYSICOCHIMIQUESVIANDESDERIVES = models.ManyToManyField(TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVES, related_name='devis_ANALYSESPHYSICOCHIMIQUESVIANDESDERIVES',blank=True)
    type_Analysesmicrobiologiquesproduitsalimentaires = models.ManyToManyField(TypeDeviAnalysesmicrobiologiquesproduitsalimentaires, related_name='devis_Analysesmicrobiologiquesproduitsalimentaires',blank=True)
    type_BEURRE = models.ManyToManyField(TypeDeviBEURRE, related_name='devis_BEURRE',blank=True)
    type_ALYSESPHYSICOCHIMIQUESPRODUITSPECHE = models.ManyToManyField(TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSPECHE, related_name='devis_ALYSESPHYSICOCHIMIQUESPRODUITSPECHE',blank=True)
    type_AnalyseMicrobiologieProduitsEaux = models.ManyToManyField(TypeDeviAnalyseMicrobiologieProduitsEaux, related_name='devis_AnalyseMicrobiologieProduitsEaux',blank=True)
    type_Alimentation_Animale = models.ManyToManyField(TypeDevi, related_name='devis_Alimentation_Animale',blank=True)
    type_Analyses_Physicochimiques_Produits_Eaux = models.ManyToManyField(TypeAnalysesPhysicochimiquesProduitsEaux, related_name='devis_Analyses_Physicochimiques_Produits_Eaux',blank=True)
    type_azote_kjedahl = models.ManyToManyField(TypeAzoteKjedahl, related_name='devis_azote_kjedahl',blank=True)

    type_debis = models.CharField(max_length=20, choices=CHOICES, default='physicochimie',blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fullname

    class Meta:
        verbose_name_plural = "List Devis Client"
