from rest_framework import serializers
from.model.report import Report
from .models import User
class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'
class LoginFormSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'})

class SignUpFormSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True, style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2', 'is_admin', 'is_client', 'is_moderator']
        extra_kwargs = {
            'password': {'write_only': True, 'style': {'input_type': 'password'}}
        }