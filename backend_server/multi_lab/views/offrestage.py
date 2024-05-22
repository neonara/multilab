from rest_framework import viewsets
from ..models.stagedescription import OffreStage
from ..serializers import OffreStageSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import Q
from django.contrib import messages
from ..models.stageurs import Stagieur
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required

class OffreStageViewSet(viewsets.ModelViewSet):
    queryset = OffreStage.objects.all()
    serializer_class = OffreStageSerializer
#!"""""""""""""" django """"""""""""""
@method_decorator(login_required(), name='dispatch')
class OffreStageCreateView(CreateView):
    model = OffreStage
    template_name = 'moderator/stage/stageList.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    success_url = reverse_lazy('stage_list')
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        queryset = OffreStage.objects.order_by('-created_at')
        context['stages'] = queryset  # Retrieve all OffreStage objects
        context['condidats'] = Stagieur.objects.all()  # Retrieve all Stagieur objects
        return context
    
    def form_valid(self, form):
        messages.success(self.request, 'Offres du Stage a été ajouter avec succès.')
        return super().form_valid(form)
@method_decorator(login_required(), name='dispatch')
class OffreStageUpdateView(UpdateView):
    model = OffreStage
    template_name = 'moderator/stage/stageList.html'  # Name of your template
    fields = '__all__'
    success_url = reverse_lazy('stage_list')
    def form_valid(self, form):
        print("Form is valid.")  # Print a message when the form is valid
        return super().form_valid(form)
    def form_valid(self, form):
        messages.success(self.request, 'Offres du Stag a été modifié avec succès.')
        return super().form_valid(form)

    def form_invalid(self, form):
        print(form.errors.as_json())  # Print a message when the form is invalid
        return super().form_invalid(form)
@method_decorator(login_required(), name='dispatch')
class OffreStageDeleteView(DeleteView):
    model = OffreStage
    template_name = 'moderator/stage/stageList.html'  # Name of your template
    success_url = reverse_lazy('stage_list')
    def form_valid(self, form):
        messages.success(self.request, 'Offres du Stag a été supprimer avec succès.')
        return super().form_valid(form)