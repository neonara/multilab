from rest_framework import viewsets
from ..models.stageurs import Stagieur
from ..serializers import StagieurSerializer
class StagieurViewSet(viewsets.ModelViewSet):
    queryset = Stagieur.objects.all()
    serializer_class = StagieurSerializer