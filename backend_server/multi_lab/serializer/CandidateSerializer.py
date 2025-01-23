from rest_framework import serializers
from ..models.condidat_semplife import Candidate_simplify

class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate_simplify
        fields = ['id', 'fullname', 'phone_number', 'email','description', 'file1', 'created_at']
        read_only_fields = ['created_at']
    
    def validate_file1(self, value):
        if value.size > 10 * 1024 * 1024:  # 10MB limit
            raise serializers.ValidationError("File size cannot exceed 10MB")
        return value

    def validate_file2(self, value):
        if value and value.size > 10 * 1024 * 1024:  # 10MB limit
            raise serializers.ValidationError("File size cannot exceed 10MB")
        return value