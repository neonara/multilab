
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
    confirm_password = serializers.CharField(write_only= True)

    class Meta:
        model = Clients
        fields = ['email', 'password', 'confirm_password', 'fullname', 'nom_entreprise', 'numero_telephone']
        extra_kwargs = {
            'password': {'write_only': True},
        }
    def validate(self, data):
        # Check if password matches confirm_password
        if data['password'] != data.pop('confirm_password'):
            raise serializers.ValidationError("Passwords do not match.")
        # Check if email already exists
        email = data.get('email')
        if Clients.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email already exists.")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        return super().create(validated_data)

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
