"""
URL configuration for management project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from manage_app.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/departments/', DepartmentListAPIView.as_view(), name = 'all-departments'),
    path('api/add-department/', DepartmentCreateAPIView.as_view(), name = 'add-departments'),
    path('api/employees/', EmployeeListAPIView.as_view(), name = 'all-employees'),
    path('api/add-employee/', EmployeeCreateAPIView.as_view(), name = 'add-employee'),
    path('api/project/<int:pk>', ProjectRetrieveAPIView.as_view(), name = 'project'),
    path('api/project/<int:pk>/update', ProjectUpdateAPIView.as_view(), name = 'project-upd'),
    path('api/project/<int:pk>/delete', ProjectDestroyAPIView.as_view(), name = 'project-del'),
    path('api/task/<int:pk>', TaskRetrieveAPIView.as_view(), name = 'task'),
    path('api/task/<int:pk>/update', TaskUpdateAPIView.as_view(), name = 'task-upd'),
    path('api/task/<int:pk>/delete', TaskDestroyAPIView.as_view(), name = 'task-del'),
]
