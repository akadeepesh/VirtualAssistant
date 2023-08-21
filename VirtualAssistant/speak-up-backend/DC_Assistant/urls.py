from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/process_command/', views.process_command_api, name='process_command_api'),
    path('Whatsapp/', views.Whatsapp, name='Whatsapp'),
]