
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),

    path('secret_multilab/', admin.site.urls),
    path('api/', include('account.urls')),
    path('api/', include('account.passwordurls')),
    path('api/', include('account.sendaccount')),
    path('api/', include('multi_lab.urls')),
    path('api/', include('ParametersAnalyse.urls')),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
