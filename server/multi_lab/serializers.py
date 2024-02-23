from django.contrib.auth import authenticate
from rest_framework import serializers
from.models.avis import Avis
from.models.user import CustomUser
from.models.devis import Devi
from.models.offres import Offre
from.models.stageurs import Stagieur
from.models.reports import Report
from.models.projects import Project


class AvisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avis
        fields = '__all__'

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'is_admin', 'is_client', 'is_moderator', 'nom_entreprise']

  
class DevisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devi
        fields = '__all__'

class OffresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offre
        fields = '__all__'

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'

class StagieurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stagieur
        fields = '__all__'
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
