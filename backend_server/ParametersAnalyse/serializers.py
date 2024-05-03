from rest_framework import serializers
from.models import *
class TypeAnalysesPhysicochimiquesProduitsEauxSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeAnalysesPhysicochimiquesProduitsEaux
        fields = '__all__'
class TypeAzoteKjedahlSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeAzoteKjedahl
        fields = '__all__'
class TypeDeviSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeDevi
        fields = '__all__'
class TypeDeviAnalyseMicrobiologieProduitsEauxSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeDeviAnalyseMicrobiologieProduitsEaux
        fields = '__all__'
class TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSPECHEtSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSPECHE
        fields = '__all__'

class TypeDeviBEURRESerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeDeviBEURRE
        fields = '__all__'

class TypeDeviFROMAGESerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeDeviFROMAGE
        fields = '__all__'
class TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeDeviANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERS
        fields = '__all__'
class TypeDeviANALYSESPHYSICOCHIMIQUESMIELSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeDeviANALYSESPHYSICOCHIMIQUESMIEL
        fields = '__all__'
class TypeDeviANALYSESPHYSICOCHIMIQUESHUILESETPRODUITSGRASSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeDeviANALYSESPHYSICOCHIMIQUESHUILESETPRODUITSGRAS
        fields = '__all__'

class TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVESSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeDeviANALYSESPHYSICOCHIMIQUESVIANDESDERIVES
        fields = '__all__'

class TypeDeviAnalysesmicrobiologiquesproduitsalimentairesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeDeviAnalysesmicrobiologiquesproduitsalimentaires
        fields = '__all__'