from rest_framework import viewsets
from ..models.devis import Devi 
from ..serializers import DevisSerializer 
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView

from django.urls import reverse_lazy
from django.db.models import Q
class DeviViewSet(viewsets.ModelViewSet):
    queryset = Devi.objects.all()
    serializer_class = DevisSerializer
class DeviListView(ListView):
    model = Devi
    template_name = 'moderator/devisCleint.html'
    queryset = Devi.objects.order_by('-created_at')
    

  # Name of your URL pattern for listing Devi


