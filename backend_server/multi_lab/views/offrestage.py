from rest_framework import viewsets
from ..models.stagedescription import OffreStage
from ..serializers import OffreStageSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import Q
from ..models.stageurs import Stagieur
class OffreStageViewSet(viewsets.ModelViewSet):
    queryset = OffreStage.objects.all()
    serializer_class = OffreStageSerializer
    
class OffreStageCreateView(CreateView):
    model = OffreStage
    template_name = 'moderator/stage/stageList.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    success_url = reverse_lazy('stage_list')
    

class OffreStageDetailView(DetailView):
    model = OffreStage
    template_name = 'moderator/stage/stageList.html'
class  OffreStageListView(ListView):
    model = OffreStage
    template_name = 'moderator/stage/stageList.html'
    def get_queryset(self):
        queryset = super().get_queryset()
        query = self.request.GET.get('q')
        if query:
            queryset = queryset.filter(
                Q(fullname__icontains=query)
            )
        return queryset
# def stage_condidat_list(request):
#     stageur_list = Stagieur.objects.all()
#     context = {
#         'stageur_list': stageur_list
#     }
#     print(context)
    
#     return render(request, 'moderator/stage/stageList.html', context)

class ofreStageUpdateView(UpdateView):
    model = OffreStage
    template_name = 'moderator/stage/update_OffreStage.html'  # Name of your template
    fields = '__all__'
    success_url = reverse_lazy('stage_list')
    def form_valid(self, form):
        print("Form is valid.")  # Print a message when the form is valid
        return super().form_valid(form)

    def form_invalid(self, form):
        print("Form is invalid.")  # Print a message when the form is invalid
        return super().form_invalid(form)

class OffreStageDeleteView(DeleteView):
    model = OffreStage
    template_name = 'moderator/stage/stageList.html'  # Name of your template
    success_url = reverse_lazy('stage_list') 