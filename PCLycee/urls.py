from django.contrib import admin
from django.urls import path, include
from Cours import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Cours.urls')),
]