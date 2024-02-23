from django.contrib import admin

# Register your models here.
from.models.avis import Avis

from.models.devis import Devi
from.models.offres import Offre
from.models.stageurs import Stagieur

from.models.projects import Project

admin.site.register(Avis)

admin.site.register(Devi)
admin.site.register(Offre)
admin.site.register(Stagieur)

admin.site.register(Project)
