from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..model.report import Report
from ..serializers import ReportSerializer
class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    