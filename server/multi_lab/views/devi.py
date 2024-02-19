from rest_framework import viewsets
from ..models.devis import Devis
from ..serializers import DevisSerializer
class DeviViewSet(viewsets.ModelViewSet):
    queryset = Devis.objects.all()
    serializer_class = DevisSerializer