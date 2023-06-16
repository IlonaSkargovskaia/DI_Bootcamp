from django.shortcuts import render
from .forms import RegisterForm, ImageForm
from django.views.generic.edit import CreateView
from django.views.generic import ListView, DetailView
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import UserPassesTestMixin 
from .models import UserProfile

from .models import Image

class RegisterView(CreateView): 
    form_class = RegisterForm
    model = User
    template_name = 'registration/register.html'
    success_url = reverse_lazy('login')
    

@login_required
def profile(request, id):
  user = User.objects.get(id=id)
  return render(request, 'registration/profile.html', {'user': user})


class HomePageView(ListView):
    model = Image
    template_name = 'homepage.html'
    context_object_name = 'images'
    
    def get_context_data(self, **kwargs): 
        context =  super().get_context_data(**kwargs) 
        user_profile = UserProfile.objects.all()
        context['userprofile'] = user_profile
        
        return context
    
    

class AddImageView(CreateView): 
    model = Image
    form_class = ImageForm
    template_name = 'image_share/upload_image.html'
    success_url = reverse_lazy('homepage')
    login_url = reverse_lazy('login') 
    redirect_field_name = reverse_lazy('homepage')
    
    def get_initial(self): 
        user = self.request.user 
        return {'author' : user }
    
    
class MyImagesView(UserPassesTestMixin, ListView):
    template_name = 'image_share/my_images.html'
    context_object_name = 'images'
    model = Image

    def get_queryset(self):
        return Image.objects.filter(author=self.request.user).all()

    def get_context_data(self, **kwargs):
        context = super(MyImagesView, self).get_context_data(**kwargs)
        context['title'] = "My Images"
        return context

    def test_func(self):
        return self.request.user.is_authenticated
    

class UserProfileView(DetailView):
    template_name = 'image_share/profile_id.html'
    context_object_name = 'profile'
    model = UserProfile
   

class UserImagesView(ListView):
    template_name = 'image_share/user_images.html'
    context_object_name = 'images'
    model = Image

    def get_queryset(self, **kwargs):
        user_id = User.objects.get(id=self.kwargs['pk'])
        return Image.objects.filter(author= user_id).all()
