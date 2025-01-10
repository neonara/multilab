from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..model.report import Report, ReportFile
from ..rapportSerilizers import ReportSerializer, ReportFileSerializer
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
from django.core.exceptions import ValidationError
from django.http import HttpResponse, JsonResponse


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
        context['reports'] = queryset  # Retrieve all OffreStage objects
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
        from_email = 'nour.d@neonara.digital'
        to_email = form.cleaned_data['client'].username

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
            messages.success(
                self.request, 'Le commandement a été ajouté avec succès. Email envoyé avec succès.')
            print(f"Sending email to: {to_email}")

        except Exception as e:
            logger.error(f"Email sending failed: {str(e)}")
            messages.error(
                self.request, f'Report added, but email failed: {str(e)}')

        return super().form_valid(form)


@method_decorator(login_required(), name='dispatch')
class ReportCreateView(CreateView):
    model = Report
    # Name of your template for the form
    template_name = './moderator/report/client_list.html'
    fields = '__all__'  # Fields to include in the form
    queryset = Report.objects.order_by('-created_at')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Adjust the queryset as needed
        context['clients'] = User.objects.all()
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


# views.py
@method_decorator(login_required(), name='dispatch')
class ReportUpdateView(UpdateView):
    model = Report
    template_name = './moderator/report/client_list.html'
    fields = ['client', 'title', 'description', 'status']
    success_url = reverse_lazy('report_list')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['clients'] = User.objects.all()
        context['existing_files'] = self.object.files.all()

        # Calculate how many more files can be uploaded
        context['remaining_slots'] = 3 - self.object.files.count()
        return context

    def form_valid(self, form):
        response = super().form_valid(form)

        # Handle file uploads
        files = self.request.FILES.getlist(
            'report_files')  # Get the files from the form
        # Get the current number of files associated with the report
        current_files_count = self.object.files.count()
        # Calculate how many more files can be uploaded
        remaining_slots = 3 - current_files_count

        # Check if the user is trying to upload more than the allowed files
        if len(files) > remaining_slots:
            messages.error(self.request, f'You can only upload up to {
                           remaining_slots} more files.')
            return self.form_invalid(form)

        # Save the uploaded files
        for file in files:
            ReportFile.objects.create(
                report_related=self.object,
                file=file
            )

        messages.success(self.request, 'Report updated successfully.')
        return response

    def form_invalid(self, form):
        print(form.errors.as_json())  # Debugging
        return super().form_invalid(form)


# Update the template to handle multiple files


@method_decorator(login_required(), name='dispatch')
class ReportDeleteView(DeleteView):
    model = Report
    template_name = './moderator/report/report_list.html'  # Name of your template
    success_url = reverse_lazy('report_list')

    def form_valid(self, form):
        messages.success(self.request, 'report a été supprimer avec succès.')
        return super().form_valid(form)


class UploadFileView(CreateView):
    def post(self, request, report_id):
        report = get_object_or_404(Report, pk=report_id)
        if 'file' in request.FILES:
            file = request.FILES['file']
            report_file = ReportFile(report_related=report, file=file)
            try:
                report_file.full_clean()
                report_file.save()
                return JsonResponse({'message': 'File uploaded successfully'}, status=201)
            except ValidationError as e:
                return JsonResponse({'error': e.message_dict}, status=400)
        return JsonResponse({'error': 'No file uploaded'}, status=400)


class DeleteFileView(UpdateView):
    def post(self, request, file_id):
        file = get_object_or_404(ReportFile, pk=file_id)
        report_id = file.report_related.id
        file.delete()
        return JsonResponse({'message': 'File deleted successfully', 'report_id': report_id}, status=200)


class UpdateFileView(DeleteView):
    success_url = reverse_lazy('report_list')
    def post(self, request, file_id):
            file = get_object_or_404(ReportFile, pk=file_id)
            if 'file' in request.FILES:
                new_file = request.FILES['file']
                file.file = new_file
                try:
                    file.full_clean()
                    file.save()
                    messages.success(request, 'File updated successfully')
                    return redirect(self.success_url)
                except ValidationError as e:
                    messages.error(request, 'Error updating file: {}'.format(e))
                    return redirect(self.success_url)
            messages.error(request, 'No file uploaded')
            return redirect(self.success_url)