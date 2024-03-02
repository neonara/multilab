from django.urls import path, include
from django.contrib import admin
from .views.user import *
from rest_framework.routers import DefaultRouter
from .views.report import ReportViewSet
from django.contrib.auth.views import (
    LogoutView, 
)
router = DefaultRouter()
router.register(r'report', ReportViewSet, basename='report')
urlpatterns = [
     path('api/', include(router.urls)),
      path('api/login/', LoginView.as_view()),
    path('/test', index, name= 'index'),
    path('', login_view, name='login_view'),
    path('register/', register, name='register'),
    # path('adminpage/', admin, name='adminpage'),
    path('customer/', customer, name='customer'),
    # path('employee/', employee, name='employee'),
    
       path('logout/', LogoutView.as_view(next_page='login_view'),name='logout'),
]