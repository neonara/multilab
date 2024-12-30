from rest_framework import viewsets
from ..models.offres import Offre
from ..serializers import OffresSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView
from django.urls import reverse_lazy
from ..models.offres import Offre
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required

class OffresViewSet(viewsets.ModelViewSet):
    queryset = Offre.objects.all()
    serializer_class = OffresSerializer
#!"""""""""""""django"""""""""""""""""""
@method_decorator(login_required(), name='dispatch')
class  CondidatListView(ListView):
    model = Offre
    template_name = 'moderator/employee/listcondidat.html'
    queryset = Offre.objects.order_by('-created_at')
   