from rest_framework import viewsets
from ..models.avis import Avis
from ..serializers import AvisSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.contrib import messages
from django.db.models import Q
class AvisViewSet(viewsets.ModelViewSet):
    queryset = Avis.objects.all()
    serializer_class = AvisSerializer
class AvisListView(ListView):
    model = Avis
    template_name = 'moderator/avisClient.html'
    queryset = Avis.objects.order_by('-created_at')
    

  # Name of your URL pattern for listing avis

class AvisUpdateView(UpdateView):
    model = Avis
    template_name = './moderator/update_avis.html'  # Name of your template
    fields = '__all__'
    
    success_url = reverse_lazy('avis_list')
    def form_valid(self, form):
        messages.success(self.request, 'Avis a été modifié avec succès.')
        return super().form_valid(form)
class AvisDeleteView(DeleteView):
    model = Avis
    template_name = './moderator/avisClient.html '  # Name of your template
    success_url = reverse_lazy('avis_list')
    def form_valid(self, form):
        messages.success(self.request, 'Avis a été supprimeé avec succès.')
        return super().form_valid(form)