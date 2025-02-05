
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),

    path('secret_multilab/', admin.site.urls),
    path('MULTILAB/', include([
        path('', include('account.urls')),  # Account-related views
        path('', include('account.passwordurls')),  # Password-related views
        path('', include('account.sendaccount')),  # Account sending related views
        path('', include('multi_lab.urls')),  # Multi Lab related views
        path('', include('ParametersAnalyse.urls')),  # Parameters Analysis related views
    ])),


]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
