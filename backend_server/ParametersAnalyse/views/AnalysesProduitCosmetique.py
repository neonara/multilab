from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from..models import *
from..serializers import *
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import Q
from django.contrib import messages
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
# Create your views here.
class AnalysesProduitCosmetiqueViewSet(viewsets.ModelViewSet):
    queryset = AnalysesProduitCosmetique.objects.all()
    serializer_class = AnalysesProduitCosmetiqueSerializer



#! ----------------Analyses de l’alimentation animale----------------
@method_decorator(login_required(), name='dispatch')
class TypeAnalysesProduitCosmetiqueCreateView(CreateView):
    model = AnalysesProduitCosmetique
    template_name = 'moderator/analyses/produit_cosmetique/produit_cosmetique.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    success_url = reverse_lazy('produit_cosmetique_list')
    def form_invalid(self, form):
        print(form.errors)
        return super().form_invalid(form)
    def form_valid(self, form):
        messages.success(self.request, 'Ce type d analyse a été ajouté avec succès.')
        return super().form_valid(form)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        queryset = AnalysesProduitCosmetique.objects.order_by('-created_at')
        context['analyse'] = queryset  # Retrieve all analyse
        return context
@method_decorator(login_required(), name='dispatch')
class Typealimentation_animaleUpdateView(UpdateView):
    model = AnalysesProduitCosmetique
    template_name = 'moderator/analyses/produit_cosmetique/produit_cosmetique.html'  # Name of your template
    fields = '__all__'
    success_url = reverse_lazy('produit_cosmetique_list')
    def form_valid(self, form):
        messages.success(self.request, 'Ce type d analyse a été modifié avec succès.')
        instance = form.save(commit=False)
        
        instance.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        print(form.errors.as_json())  # Print a message when the form is invalid
        return super().form_invalid(form)
@method_decorator(login_required(), name='dispatch')
class Typealimentation_animalelDeleteView(DeleteView):
    model = AnalysesProduitCosmetique
    template_name = 'moderator/analyses/produit_cosmetique/produit_cosmetique.html'  # Name of your template for the form
    success_url = reverse_lazy('produit_cosmetique_list')
    def form_valid(self, form):
        messages.success(self.request, 'Ce type d analyse a été supprimeé avec succès.')
        return super().form_valid(form)