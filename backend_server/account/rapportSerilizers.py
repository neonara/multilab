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
        def create(self, validated_data):
            files_data = validated_data.pop('files', [])
            report = Report.objects.create(**validated_data)
            for file_data in files_data:
                ReportFile.objects.create(report_related=report, **file_data)
            return report

    def update(self, instance, validated_data):
        files_data = validated_data.pop('files', [])
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        # Handle file updates if needed (e.g., adding or removing files)
        for file_data in files_data:
            ReportFile.objects.create(report_related=instance, **file_data)
        return instance

    
