from rest_framework import viewsets
from ..models.jobdescription import Offre_description
from ..serializers import Offre_descriptionSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import Q
from ..models.offres import Offre
from django.contrib import messages
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
class Offre_descriptionViewSet(viewsets.ModelViewSet):
    queryset = Offre_description.objects.all()
    serializer_class = Offre_descriptionSerializer
#! """"""""""""django"""""""""""""""""""""
@method_decorator(login_required(), name='dispatch')
class Offre_descriptionCreateView(CreateView):
    model = Offre_description
    template_name = 'moderator/employee/employeeList.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    success_url = reverse_lazy('job_list')
    
    def form_valid(self, form):
        messages.success(self.request, 'Offre d emploi a été ajouter avec succès.')
        return super().form_valid(form)


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        queryset = Offre_description.objects.order_by('-created_at')
        context['posts'] = queryset  # Retrieve all OffreStage objects
        context['condidats'] = Offre.objects.all()  # Retrieve all Stagieur objects
        return context
    
@method_decorator(login_required(), name='dispatch')
class Offre_descriptionDetailView(DetailView):
    model = Offre_description
    template_name = 'moderator/employee/employeeList.html'

@method_decorator(login_required(), name='dispatch')
class Offre_descriptionUpdateView(UpdateView):
    model = Offre_description
    template_name = 'moderator/employee/employeeList.html'  # Name of your template
    fields = '__all__'
    success_url = reverse_lazy('job_list')
    def form_valid(self, form):
        messages.success(self.request, 'Offre d emploi a été modifier avec succès.')
        return super().form_valid(form)

    def form_invalid(self, form):
        print(form.errors.as_json())  # Print a message when the form is invalid
        return super().form_invalid(form)
    
@method_decorator(login_required(), name='dispatch')
class Offre_descriptionDeleteView(DeleteView):
    model = Offre_description
    template_name = 'moderator/employee/employeeList.html'  # Name of your template
    success_url = reverse_lazy('job_list')
    def form_valid(self, form):
        messages.success(self.request, 'Offre d emploi a été supprimeé avec succès.')
        return super().form_valid(form)