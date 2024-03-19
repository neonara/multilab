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
class Offre_descriptionViewSet(viewsets.ModelViewSet):
    queryset = Offre_description.objects.all()
    serializer_class = Offre_descriptionSerializer
class Offre_descriptionCreateView(CreateView):
    model = Offre_description
    template_name = 'moderator/employee/employeeList.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    success_url = reverse_lazy('job_list')
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['posts'] = Offre_description.objects.all()  # Retrieve all OffreStage objects
        context['condidats'] = Offre.objects.all()  # Retrieve all Stagieur objects
        return context
    

class Offre_descriptionDetailView(DetailView):
    model = Offre_description
    template_name = 'moderator/employee/employeeList.html'
class  Offre_descriptionListView(ListView):
    model = Offre_description
    template_name = 'moderator/employee/employeeList.html'
    def get_queryset(self):
        queryset = super().get_queryset()
        query = self.request.GET.get('q')
        if query:
            queryset = queryset.filter(
                Q(fullname__icontains=query)
            )
        return queryset  

class Offre_descriptionUpdateView(UpdateView):
    model = Offre_description
    template_name = 'moderator/employee/update_Offre_description.html'  # Name of your template
    fields = '__all__'
    success_url = reverse_lazy('job_list')
    def form_valid(self, form):
        messages.success(self.request, 'Offre d emploi a été supprimeé avec succès.')
        return super().form_valid(form)

    def form_invalid(self, form):
        print("Form is invalid.")  # Print a message when the form is invalid
        return super().form_invalid(form)

class Offre_descriptionDeleteView(DeleteView):
    model = Offre_description
    template_name = 'moderator/employee/employeeList.html'  # Name of your template
    success_url = reverse_lazy('job_list')
    def form_valid(self, form):
        messages.success(self.request, 'Offre d emploi a été supprimeé avec succès.')
        return super().form_valid(form)