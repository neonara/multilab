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
# Create your views here.
#! ----------------TypeAzoteKjedahl----------------
class TypeAzoteKjedahlCreateView(CreateView):
    model = TypeAzoteKjedahl
    template_name = 'moderator/analyses/produits_eaux/physicochimie/azote_kjedahl.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    success_url = reverse_lazy('azote_kjedahl_list')
    def form_invalid(self, form):
        print(form.errors)
        return super().form_invalid(form)
    def form_valid(self, form):
        messages.success(self.request, 'Ce type d analyse a été ajouté avec succès.')
        return super().form_valid(form)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        queryset = TypeAzoteKjedahl.objects.order_by('-created_at')
        context['analyse'] = queryset  # Retrieve all analyse
        return context

class TypeAzoteKjedahlUpdateView(UpdateView):
    model = TypeAzoteKjedahl
    template_name = 'moderator/analyses/produits_eaux/physicochimie/azote_kjedahl.html'  # Name of your template
    fields = '__all__'
    success_url = reverse_lazy('azote_kjedahl_list')
    def form_valid(self, form):
        messages.success(self.request, 'Ce type d analyse a été modifié avec succès.')
        instance = form.save(commit=False)
        
        instance.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        print("Form is invalid.")  # Print a message when the form is invalid
        return super().form_invalid(form)

class TypeAzoteKjedahlDeleteView(DeleteView):
    model = TypeAzoteKjedahl
    template_name = 'moderator/analyses/produits_eaux/physicochimie/azote_kjedahl.html'  # Name of your template for the form
    success_url = reverse_lazy('azote_kjedahl_list')
    def form_valid(self, form):
        messages.success(self.request, 'Ce type d analyse a été supprimeé avec succès.')
        return super().form_valid(form)