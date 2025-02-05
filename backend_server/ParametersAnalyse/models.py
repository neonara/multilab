from django.db import models
from django.utils import timezone
class TypeAnalysesPhysicochimiquesProduitsEaux(models.Model):
    type_analyses_physicochimiques_produits_eaux = models.CharField('Analyses Physicochimiques des Produits d Eaux ', max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_analyses_physicochimiques_produits_eaux

class TypeAzoteKjedahl(models.Model):
    type_azote_kjedahl = models.CharField('Azote Kjeldahl', max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_azote_kjedahl

class TypeDevi(models.Model):
    type_alimentation_animale = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_alimentation_animale
    
    class Meta:
        verbose_name_plural = "Ajouter Physicochimie des aliments pour animaux"

class TypeDeviAnalyseMicrobiologieProduitsEaux(models.Model):
    type_analyse_microbiologie_produits_eaux = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_analyse_microbiologie_produits_eaux

class TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSPECHE(models.Model):
    type_analyses_physicochimiques_produit_peche = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_analyses_physicochimiques_produit_peche

class TypeDeviBEURRE(models.Model): 
    type_beurre = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_beurre

class TypeDeviFROMAGE(models.Model):
    type_fromage = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_fromage

class TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERS(models.Model):
    type_analyses_physicochimiques_produits_laitiers = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_analyses_physicochimiques_produits_laitiers
    
    class Meta:
        verbose_name_plural = "Ajouter Analyses Physicochimiques des Produits Laitiers"

class TypeDeviANALYSESPHYSICOCHIMIQUESMIEL(models.Model):
    type_analyses_physicochimiques_miel = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_analyses_physicochimiques_miel

class TypeDeviANALYSESPHYSICOCHIMIQUESHUILESETPRODUITSGRAS(models.Model):
    type_analyses_physicochimiques_huiles_et_produits_gras = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_analyses_physicochimiques_huiles_et_produits_gras
    
    class Meta:
        verbose_name_plural = "Ajouter Analyses Physicochimiques Huiles et Produits Gras"

class TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVES(models.Model):
    type_analyses_physicochimiques_viandes_et_derives = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_analyses_physicochimiques_viandes_et_derives
    
    class Meta:
        verbose_name_plural = "Ajouter Analyses Physicochimiques des Viandes et Dérivés"

class TypeDeviAnalysesmicrobiologiquesproduitsalimentaires(models.Model):
    type_analyses_microbiologiques_produits_alimentaires = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_analyses_microbiologiques_produits_alimentaires
    
    class Meta:
        verbose_name_plural = "Ajouter Analyses Microbiologiques des Produits Alimentaires"
class AnalysesProduitCosmetique(models.Model):
    type_analyses_microbiologiques_produits_cosmetique = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.type_analyses_microbiologiques_produits_cosmetique
    
    class Meta:
        verbose_name_plural = "Ajouter Analyses Microbiologiques des Produits Cosmétique et D'hygiène"