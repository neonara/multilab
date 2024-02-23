from rest_framework import viewsets
from ..models.offres import Offre
from ..serializers import OffresSerializer
class OffresViewSet(viewsets.ModelViewSet):
    queryset = Offre.objects.all()
    serializer_class = OffresSerializer