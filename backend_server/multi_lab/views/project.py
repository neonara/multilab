from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from ..models.projects import Project
from ..serializers import ProjectSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.contrib import messages
from django.db.models import Q
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Added Successfully", status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        if serializer.is_valid():
            serializer.save()
            return Response("Updated Successfully")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response("Deleted Successfully", status=status.HTTP_204_NO_CONTENT)
#!"""""""""""""" django"""""""""""""""""
@method_decorator(login_required(), name='dispatch')
class ProjectCreateView(CreateView):
    model = Project
    template_name = 'moderator/project/project_form.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    success_url = reverse_lazy('project_list')

    
    def form_invalid(self, form):
        print(form.errors)
        return super().form_invalid(form)
    def form_valid(self, form):
        messages.success(self.request, 'Projet a été ajouteé avec succès.')
        return super().form_valid(form)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        queryset = Project.objects.order_by('-created_at')
        context['projects'] = queryset 
        print("++++++++++++++++++++++++x",context['projects']) # Retrieve all projects
        return context
@method_decorator(login_required(), name='dispatch')   
class ProjectUpdateView(UpdateView):
    model = Project
    template_name = 'moderator/project/project_edit.html'  # Name of your template
    fields = '__all__'
    success_url = reverse_lazy('project_list')
    def form_valid(self, form):
        messages.success(self.request, 'Projet a été modifié avec succès.')
        instance = form.save(commit=False)
        if 'image' in form.cleaned_data:  # Check if image field is present in form data
            instance.image = form.cleaned_data['image']  # Update image field
        instance.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        print("Form is invalid.")  # Print a message when the form is invalid
        return super().form_invalid(form)
@method_decorator(login_required(), name='dispatch')
class ProjectDeleteView(DeleteView):
    model = Project
    template_name = 'moderator/project/project_form.html'  # Name of your template
    success_url = reverse_lazy('project_list')
    def form_valid(self, form):
        messages.success(self.request, 'Projet a été supprimeé avec succès.')
        return super().form_valid(form)