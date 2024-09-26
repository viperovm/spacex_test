from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('site_elements.urls')),
]

urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]

admin.site.site_header = 'Администрирование Spacex'
