from rest_framework import viewsets
from ..models.offres import Offres
from ..serializers import OffresSerializer
class OffresViewSet(viewsets.ModelViewSet):
    queryset = Offres.objects.all()
    serializer_class = OffresSerializer