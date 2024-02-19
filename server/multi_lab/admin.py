from django.contrib import admin

# Register your models here.
from.models.avis import Avis
from.models.clients import Clients
from.models.devis import Devis
from.models.offres import Offres
from.models.stageurs import Stagieur
from.models.reports import Report
from.models.projects import Project
admin.site.register(Avis)
admin.site.register(Clients)
admin.site.register(Devis)
admin.site.register(Offres)
admin.site.register(Stagieur)
admin.site.register(Report)
admin.site.register(Project)