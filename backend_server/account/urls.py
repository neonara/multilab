from django.urls import path, include
from django.contrib import admin
from . import views
from .views.user import *
from rest_framework.routers import DefaultRouter
from .views.report import (ReportViewSet,
    ClientReportListView, ReportCreateView,
    ReportUpdateView, ReportDeleteView, ReportFileView, UploadFileView, DeleteFileView, UpdateFileView,
)
from django.contrib.auth.views import (
    LogoutView, 
)
router = DefaultRouter()
router.register(r'reports', ReportViewSet, basename='report')  # Use ReportViewSet here

urlpatterns = [
     path('', include(router.urls)),
      path('api/login/', LoginView.as_view()),
    # path('/test', index, name= 'index'),
    path('login_view', login_view, name='login_view'),
    path('register/', register, name='register'),
    # path('adminpage/', admin, name='adminpage'),
    path('customer/', customer, name='customer'),
    path('employee/', employee, name='employee'),
    path('logout/', LogoutView.as_view(next_page='login_view'),name='logout_user'),
    #report
    path('report_list/', ClientReportListView.as_view(), name='report_list'),
    path('reports/<int:pk>/delete/', ReportDeleteView.as_view(), name='report_delete'),
    # path('report_list/<int:pk>/delete/', ReportDeleteView.as_view(), name='report_delete'),
    path('report/<int:pk>/update/', ReportUpdateView.as_view(), name='report_update'),
    path('report_list/client/', ClientReportListView.as_view(), name='report_client'),
    # path('report_list/', ClientReportListView.as_view(), name='report_list'),
    path('report/<int:report_id>/upload/', UploadFileView.as_view(), name='upload_file'),
    path('file/<int:file_id>/delete/', DeleteFileView.as_view(), name='delete_file'),
    path('file/<int:file_id>/update/', UpdateFileView.as_view(), name='update_file'),
]