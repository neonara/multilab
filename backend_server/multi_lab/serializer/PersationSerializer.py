from rest_framework import serializers
from ..models.perstation import Persation


class PersationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persation
        fields = ['id', 'title', 'description', 'image', 'link_description',
                  'icon_image', 'status', 'created_at', 'updated_at']
        extra_kwargs = {
            'image': {'required': False},
            'icon_image': {'required': False},
        }
