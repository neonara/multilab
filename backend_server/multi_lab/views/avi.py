from rest_framework import viewsets
from ..models.avis import Avis
from ..serializers import AvisSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.contrib import messages
from django.db.models import Q
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
class AvisViewSet(viewsets.ModelViewSet):
    queryset = Avis.objects.all()
    serializer_class = AvisSerializer
#!"""""djanoooo"""""""""""
@method_decorator(login_required(), name='dispatch')
class AvisListView(ListView):
    model = Avis
    template_name = 'moderator/avisClient.html'
    queryset = Avis.objects.order_by('-created_at')
    
@method_decorator(login_required(), name='dispatch')
class AvisCreateView(CreateView):
    model = Avis
    template_name = 'client/dashClient.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    success_url = reverse_lazy('customer')
    def form_invalid(self, form):
        print(form.errors)
        return super().form_invalid(form)
    def form_valid(self, form):
        messages.success(self.request, 'Votre avis a été envoyé avec succès.')
        
        return super().form_valid(form)
 
@method_decorator(login_required(), name='dispatch')
class AvisUpdateView(UpdateView):
    model = Avis
    template_name = 'moderator/avisClient.html'
    fields = '__all__'
    success_url = reverse_lazy('avis_list')

    def form_valid(self, form):
        messages.success(self.request, 'Avis a été modifié avec succès.')
        return super().form_valid(form)

    def form_invalid(self, form):
        if self.request.headers.get('x-requested-with') == 'XMLHttpRequest':
            return JsonResponse({'success': False, 'errors': form.errors}, status=400)
        return super().form_invalid(form)
@method_decorator(login_required(), name='dispatch')
class AvisDeleteView(DeleteView):
    model = Avis
    template_name = './moderator/avisClient.html '  # Name of your template
    success_url = reverse_lazy('avis_list')
    def form_valid(self, form):
        messages.success(self.request, 'Avis a été supprimeé avec succès.')
        return super().form_valid(form)

