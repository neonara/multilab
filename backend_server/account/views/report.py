from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..model.report import Report , ReportFile
from ..rapportSerilizers import ReportSerializer ,ReportFileSerializer
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
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

class ReportViewSet(ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
   
class ReportListView(APIView):
    def get(self, request):
        reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)
        return Response(serializer.data)
class ReportDetailView(APIView):
    def get(self, request, pk):
        report = get_object_or_404(Report, pk=pk)
        serializer = ReportSerializer(report)
        return Response(serializer.data)

    def put(self, request, pk):
        report = get_object_or_404(Report, pk=pk)
        serializer = ReportSerializer(report, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        serializer = ReportSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReportFileView(APIView):
    def post(self, request, report_id):
        report = get_object_or_404(Report, pk=report_id)
        file_serializer = ReportFileSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save(report_reated=report)
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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
        subject = 'Nouveau Rapport Multilab'
        context = {'report': self.object}
        template_path = './moderator/report/new_report_email.html'
        html_message = render_to_string(template_path, context)
        plain_message = strip_tags(html_message)
        from_email = 'hello@biopilates.fr'
        to_email = form.cleaned_data['client'].email

        import logging
        logger = logging.getLogger('django.mail')
        logger.setLevel(logging.DEBUG)

        try:
            result = send_mail(
                subject,
                plain_message,
                from_email,
                [to_email],
                html_message=html_message,
                fail_silently=False
            )
            logger.debug(f"Email sending result: {result}")
            messages.success(self.request, 'Report added and email sent successfully.')
            print(f"Sending email to: {to_email}")

        except Exception as e:
            logger.error(f"Email sending failed: {str(e)}")
            messages.error(self.request, f'Report added, but email failed: {str(e)}')

        return super().form_valid(form)

    
@method_decorator(login_required(), name='dispatch')   
class ReportCreateView(CreateView):
    model = Report
    template_name = './moderator/report/client_list.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    queryset = Report.objects.order_by('-created_at')
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['clients'] = User.objects.all()  # Adjust the queryset as needed
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
    def form_invalid(self, form):
        print("Form errors:", form.errors)  # Debugging
        return super().form_invalid(form) 
    
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