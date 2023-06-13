"""
URL configuration for drf_course project.

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
from posts.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    # path('api/posts/', PostView.as_view(), name = 'posts'),
    # path('api/posts/<int:pk>', PostView.as_view(), name = 'post-detail'), #на конкретный пост
    path('api/posts/', PostListView.as_view(), name = 'posts'),
    path('api/posts/<int:pk>', PostDetailView.as_view(), name = 'posts'),
    path('api/posts/<int:pk>/delete', PostDeleteView.as_view(), name = 'post-delete'),
    path('api/user/<int:pk>', UserDetailView.as_view(), name = 'user-detail'),
    
]
