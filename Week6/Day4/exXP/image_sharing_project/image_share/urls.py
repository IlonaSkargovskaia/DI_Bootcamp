from django.urls import path
from . import views
from .views import *
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.HomePageView.as_view(), name="home"),
    path('signup/', views.SignUpView.as_view(), name='signup'),
    path('upload-image/', views.ImageCreateView.as_view(), name='upload_image'),
    path('my-images/', views.MyImagesView.as_view(), name='my_images'),
    path('album/<pk>', views.UsersImagesView.as_view(), name='album'),
    path('profile/<pk>', views.UserProfileView.as_view(), name='profile'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)