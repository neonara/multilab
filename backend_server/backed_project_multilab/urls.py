
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),

    path('secret_multilab/', admin.site.urls),
    path('MULTILAB/', include('account.urls')),
    path('MULTILAB/', include('account.passwordurls')),
    path('MULTILAB/', include('account.sendaccount')),
    path('MULTILAB/', include('multi_lab.urls')),
    path('MULTILAB/', include('ParametersAnalyse.urls')),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
