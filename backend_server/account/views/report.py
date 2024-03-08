from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..model.report import Report
from ..serializers import ReportSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import Q
from account.models import User  
class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
class ClientReportListView(ListView):
    template_name = './moderator/report/report_create.html'

    

    def get_queryset(self):
        # Get all users who are clients along with their associated reports
        return User.objects.filter(is_client=True).prefetch_related('client_reports')
class ReportCreateView(CreateView):
    model = Report
    template_name = './moderator/report/report_create.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['clients'] = User.objects.all()  # Fetch all clients
        return context
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        clients = User.objects.filter(is_client=True)  # Get all clients
        client_reports = {}
        for client in clients:
            client_reports[client] = Report.objects.filter(client=client)
        context['client_reports'] = client_reports
        return context

    success_url = reverse_lazy('report_list')   
class ReportDetailView(DetailView):
    model = Report
    template_name = './moderator/report/report_list.html'
class  ReportListView(ListView):
    model = Report
    template_name = './moderator/report/report_list.html'
    def get_queryset(self):
        queryset = super().get_queryset()
        query = self.request.GET.get('q')
        if query:
            queryset = queryset.filter(
                Q(fullname__icontains=query)
            )
        return queryset
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        clients = User.objects.filter(is_client=True)  # Get all clients
        client_reports = {}
        for client in clients:
            client_reports[client] = Report.objects.filter(client=client)
        context['client_reports'] = client_reports
        return context
class ReportUpdateView(UpdateView):
    model = Report
    template_name = './moderator/report/report_list.html'  # Name of your template
    fields = '__all__'
    success_url = reverse_lazy('report_list')
    def form_valid(self, form):
        print("Form is valid.")  # Print a message when the form is valid
        return super().form_valid(form)

    def form_invalid(self, form):
        print("Form is invalid.")  # Print a message when the form is invalid
        return super().form_invalid(form)
class ReportDeleteView(DeleteView):
    model = Report
    template_name = './moderator/report/report_list.html'  # Name of your template
    success_url = reverse_lazy('report_list')