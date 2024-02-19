
from rest_framework import serializers
from.models.avis import Avis
from.models.clients import Clients
from.models.devis import Devis
from.models.offres import Offres
from.models.stageurs import Stagieur
from.models.reports import Report
from.models.projects import Project


class AvisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avis
        fields = '__all__'

class ClientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clients
        fields = '__all__'

class DevisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devis
        fields = '__all__'

class OffresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offres
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
