from rest_framework import viewsets
from ..models.offres import Offre
from ..serializers import OffresSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView
from django.urls import reverse_lazy
from ..models.offres import Offre
class OffresViewSet(viewsets.ModelViewSet):
    queryset = Offre.objects.all()
    serializer_class = OffresSerializer
class  CondidatListView(ListView):
    model = Offre
    template_name = 'moderator/employee/listcondidat.html'
    def get_queryset(self):
        queryset = super().get_queryset()
        query = self.request.GET.get('q')
        if query:
            queryset = queryset.filter(
                Q(fullname__icontains=query)
            )
        return queryset 