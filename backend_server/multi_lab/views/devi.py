from rest_framework import viewsets
from ..models.devis import Devi
from ..serializers import DevisSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import Q
class DeviViewSet(viewsets.ModelViewSet):
    queryset = Devi.objects.all()
    serializer_class = DevisSerializer
class DeviListView(ListView):
    model = Devi
    template_name = 'moderator/devisCleint.html'
    def get_queryset(self):
        queryset = super().get_queryset()
        query = self.request.GET.get('q')
        if query:
            queryset = queryset.filter(
                Q(fullname__icontains=query)
            )
        return queryset

  # Name of your URL pattern for listing Devi

class DeviUpdateView(UpdateView):
    model = Devi
    template_name = './moderator/update_Devi.html'  # Name of your template
    fields = '__all__'
    success_url = reverse_lazy('devi_list')  
class DeviDeleteView(DeleteView):
    model = Devi
    template_name = './moderator/devisCleint.html '  # Name of your template
    success_url = reverse_lazy('devi_list') 