"""
URL configuration for vgm_backend project.
"""
from django.contrib import admin
from django.urls import path, include, re_path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contact/', include('contact_app.urls')),
    # Catch-all: serve React SPA for any other route
    re_path(r'^(?!api/|admin/).*$', views.index, name='index'),
]
