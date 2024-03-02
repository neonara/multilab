from rest_framework import viewsets
from ..models.jobdescription import Offre_description
from ..serializers import Offre_descriptionSerializer
class Offre_descriptionViewSet(viewsets.ModelViewSet):
    queryset = Offre_description.objects.all()
    serializer_class = Offre_descriptionSerializer