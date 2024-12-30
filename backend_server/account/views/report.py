from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..model.report import Report
from ..serializers import ReportSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import Q
from django.contrib import messages
from account.models import User
from django.utils.decorators import method_decorator  
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
# django
@method_decorator(login_required(), name='dispatch')
class ClientReportListView(CreateView):
    model = Report
    fields = '__all__'
    template_name = './moderator/report/report_list.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        queryset = Report.objects.order_by('-created_at')
        context['reports'] =queryset  # Retrieve all OffreStage objects
        context['clients'] = User.objects.all()
        return context
    success_url = reverse_lazy('report_list')
    def form_valid(self, form):
        self.object = form.save()
        # Send email notification
        subject = 'Nouveau Rapport Multilab'
        context = {'report': self.object}
        message = render_to_string('./moderator/report/new_report_email.html', context)
        plain_message = strip_tags(message)  # Strip HTML tags for the plain message
        from_email = 'nourderouich159@gmail.com'
        to_email = form.cleaned_data['client'].username # Replace with the recipient email address
        send_mail(subject, plain_message, from_email, [to_email], html_message=message)
        messages.success(self.request, 'report a été ajouté et envoyé par email avec succès.')
        return super().form_valid(form) 
    
@method_decorator(login_required(), name='dispatch')   
class ReportCreateView(CreateView):
    model = Report
    template_name = './moderator/report/client_list.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    queryset = Report.objects.order_by('-created_at')
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
    def form_valid(self, form):
        messages.success(self.request, 'report a été ajouter avec succès.')
        return super().form_valid(form)  
    
@method_decorator(login_required(), name='dispatch')
class ReportUpdateView(UpdateView):
    model = Report
    template_name = './moderator/report/report_update.html'  # Name of your template
    fields = '__all__'
    success_url = reverse_lazy('report_list')
    def form_valid(self, form):
        messages.success(self.request, 'report a été modifié avec succès.')
        return super().form_valid(form)
    

    def form_invalid(self, form):
        print(form.errors.as_json()) # Print a message when the form is invalid
        return super().form_invalid(form)
@method_decorator(login_required(), name='dispatch')
class ReportDeleteView(DeleteView):
    model = Report
    template_name = './moderator/report/report_list.html'  # Name of your template
    success_url = reverse_lazy('report_list')
    def form_valid(self, form):
        messages.success(self.request, 'report a été supprimer avec succès.')
        return super().form_valid(form)