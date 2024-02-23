from rest_framework import viewsets
from ..models.devis import Devi
from ..serializers import DevisSerializer
class DeviViewSet(viewsets.ModelViewSet):
    queryset = Devi.objects.all()
    serializer_class = DevisSerializer