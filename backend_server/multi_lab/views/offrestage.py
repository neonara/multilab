from rest_framework import viewsets
from ..models.stagedescription import OffreStage
from ..serializers import OffreStageSerializer
class OffreStageViewSet(viewsets.ModelViewSet):
    queryset = OffreStage.objects.all()
    serializer_class = OffreStageSerializer