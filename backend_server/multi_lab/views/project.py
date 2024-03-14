from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from ..models.projects import Project
from ..serializers import ProjectSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import Q
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
class ProjectCreateView(CreateView):
    model = Project
    template_name = 'moderator/project/project_list.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    success_url = reverse_lazy('project_list')
    
    def form_invalid(self, form):
        print(form.errors)
        return super().form_invalid(form)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['projects'] = Project.objects.all()  # Retrieve all projects
        return context
    
    




class ProjectUpdateView(UpdateView):
    model = Project
    template_name = 'moderator/project/project_edit.html'  # Name of your template
    fields = '__all__'
    success_url = reverse_lazy('project_list')
    def form_valid(self, form):
        print("Form is valid.")  # Print a message when the form is valid
        return super().form_valid(form)

    def form_invalid(self, form):
        print("Form is invalid.")  # Print a message when the form is invalid
        return super().form_invalid(form)

class ProjectDeleteView(DeleteView):
    model = Project
    template_name = 'moderator/project/project_form.html'  # Name of your template
    success_url = reverse_lazy('project_list') 