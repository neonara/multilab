from rest_framework import serializers
from .model.report import Report, ReportFile
from account.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class ReportFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportFile
        fields = ['id', 'report_reated', 'file', 'created_at', 'updated_at']

class ReportSerializer(serializers.ModelSerializer):
    client = UserSerializer(read_only=True)
    files = ReportFileSerializer(many=True, read_only=True)

    class Meta:
        model = Report
        fields = ['id', 'title', 'status', 'client', 'created_at', 'updated_at', 'files','description',]
        extra_kwargs = {
            'files': {'required': False},
            
        }
    
