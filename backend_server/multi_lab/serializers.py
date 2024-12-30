from django.contrib.auth import authenticate
from rest_framework import serializers
from.models.avis import Avis

from.models.devis import *
from.models.jobdescription import Offre_description
from.models.offres import Offre
from.models.stageurs import Stagieur
from.models.stagedescription import OffreStage
from.models.projects import Project

class AvisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avis
        fields = '__all__'
class OffreStageSerializer(serializers.ModelSerializer):
    class Meta:
        model = OffreStage
        fields = '__all__'

class Offre_descriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offre_description
        fields = '__all__'

  
class DevisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devi
        fields = '__all__'

class OffresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offre
        fields = '__all__'



class StagieurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stagieur
        fields = '__all__'
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
