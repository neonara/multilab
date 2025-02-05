from rest_framework import serializers
from ..models.event import Event, EventArticle


class EventArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventArticle
        fields = ['id', 'description', 'image1',
                  'image2', 'image3', 'created_at']
        extra_kwargs = {
            'image1': {'required': False},
            'image2': {'required': False},
            'image3': {'required': False},
        }


class EventSerializer(serializers.ModelSerializer):
    articles = EventArticleSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'date_event', 'image',
                  'status', 'created_at', 'updated_at', 'articles']
        extra_kwargs = {
            'image': {'required': False},
            'articles': {'required': False}, 
            'date_event': {'required': False},
        }
