from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.urls import reverse_lazy
from ..models.perstation import Persation
from ..serializer.PersationSerializer import PersationSerializer
from django.contrib import messages
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
# Django Template Views


@method_decorator(login_required(), name='dispatch')
class PersationListView(ListView):
    model = Persation
    template_name = './moderator/persation/persation_list.html'
    context_object_name = 'persations'


@method_decorator(login_required(), name='dispatch')
class PersationDetailView(DetailView):
    model = Persation
    template_name = './moderator/persation/persation_detail.html'


@method_decorator(login_required(), name='dispatch')
class PersationCreateView(CreateView):
    model = Persation
    template_name = './moderator/persation/persation_form.html'
    fields = ['title', 'description', 'image',
              'icon_image', 'link_description', 'status']
    success_url = reverse_lazy('persation_list')

    def form_valid(self, form):
        messages.success(
            self.request, 'persation a été supprimer avec succès.')
        return super().form_valid(form)

    def form_invalid(self, form):
        print("Form errors:", form.errors)  # Debugging
        return super().form_invalid(form)


@method_decorator(login_required(), name='dispatch')
class PersationUpdateView(UpdateView):
    model = Persation
    template_name = './moderator/persation/persation_list.html'
    fields = ['title', 'description', 'image',
              'icon_image', 'link_description', 'status']
    success_url = reverse_lazy('persation_list')

    def form_invalid(self, form):
        print("Form errors:", form.errors)  # Debugging
        return super().form_invalid(form)

    def form_valid(self, form):
        messages.success(self.request, 'Perstation a été modifié avec succès.')
        return super().form_valid(form)


@method_decorator(login_required(), name='dispatch')
class PersationDeleteView(DeleteView):
    model = Persation
    template_name = './moderator/persation/persation_list.html'
    success_url = reverse_lazy('persation_list')

    def form_valid(self, form):
        messages.success(
            self.request, 'persation a été supprimer avec succès.')
        return super().form_valid(form)


# API ViewSet for React
class PersationViewSet(viewsets.ModelViewSet):
    queryset = Persation.objects.all()
    serializer_class = PersationSerializer
