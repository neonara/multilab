from django.urls import path, include
from django.contrib import admin

from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('analyse/', analyse, name='analyse'),
    
  
]