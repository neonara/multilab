from django.contrib import admin

# Register your models here.
from.models.avis import Avis
# from.models.client import Client
from.models.user import CustomUser
from.models.devis import Devi
from.models.offres import Offre
from.models.stageurs import Stagieur
from.models.reports import Report
from.models.projects import Project

admin.site.register(Avis)
admin.site.register(CustomUser)
admin.site.register(Devi)
admin.site.register(Offre)
admin.site.register(Stagieur)
admin.site.register(Report)
admin.site.register(Project)
