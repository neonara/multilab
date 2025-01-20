from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated
from ..models.condidat_semplife import Candidate_simplify
from ..serializer.CandidateSerializer import CandidateSerializer
from django.urls import reverse_lazy
from django.contrib import messages
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.shortcuts import render, redirect, get_object_or_404


class CandidateViewSet(viewsets.ModelViewSet):
    queryset = Candidate_simplify.objects.all()
    serializer_class = CandidateSerializer
    parser_classes = (MultiPartParser, FormParser)
  

    def perform_create(self, serializer):
        serializer.save()
# djano template

class CandidateListView( ListView):
    model = Candidate_simplify
    template_name = './moderator/candidates/candidate_list.html'
    context_object_name = 'candidates'
    ordering = ['-created_at']
    paginate_by = 10


