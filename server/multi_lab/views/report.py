from rest_framework import viewsets
from ..models.reports import Report
from ..serializers import ReportSerializer
class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer