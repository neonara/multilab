
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),
    path('admin/clearcache/', include('clearcache.urls')),
    path('secret/', admin.site.urls),
    path('', include('account.urls')),
    path('', include('account.passwordurls')),
    path('', include('account.sendaccount')),
    path('api/',include('multi_lab.urls')),
    path('',include('ParametersAnalyse.urls')),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
