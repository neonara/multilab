from rest_framework import viewsets
from ..models.stageurs import Stagieur
from ..serializers import StagieurSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import Q
class StagieurViewSet(viewsets.ModelViewSet):
    queryset = Stagieur.objects.all()
    serializer_class = StagieurSerializer
def stage_list_view(request):
    stageur_list = Stagieur.objects.all()
    context = {
        'stageur_list': stageur_list
    }
    return render(request, 'moderator/stage/stageList.html', context)

   