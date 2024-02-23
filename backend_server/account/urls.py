from django.urls import path, include
from .views.user import login_view,register,index,login_view,customer
from rest_framework.routers import DefaultRouter
from .views.report import ReportViewSet
router = DefaultRouter()
router.register(r'report', ReportViewSet, basename='report')
urlpatterns = [
     path('api/', include(router.urls)),
    path('', index, name= 'index'),
    path('login/', login_view, name='login_view'),
    path('register/', register, name='register'),
    # path('adminpage/', admin, name='adminpage'),
    path('customer/', customer, name='customer'),
    # path('employee/', employee, name='employee'),
]