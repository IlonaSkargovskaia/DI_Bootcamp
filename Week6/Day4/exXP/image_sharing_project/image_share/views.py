from django.shortcuts import reverse
from django.views import generic
from .models import Image, Profile
from .forms import ImageForm
from django.urls import reverse_lazy
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.mixins import UserPassesTestMixin
from django.contrib.auth import logout
from django.contrib.auth.models import User


class HomePageView(generic.ListView):
    template_name = 'home.html'
    context_object_name = 'images'
    queryset = Image.objects.all()
    model = Image



class SignUpView(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"


class ImageCreateView(UserPassesTestMixin, generic.CreateView):
    template_name = 'upload_image.html'
    form_class = ImageForm

    def form_valid(self, form):
        image = form.save(commit=False)
        image.user = self.request.user
        image.save()

        return super().form_valid(form)

    def get_success_url(self):
        return reverse('home')


    def test_func(self):
        return self.request.user.is_authenticated


class MyImagesView(UserPassesTestMixin, generic.ListView):
    template_name = 'my_images.html'
    context_object_name = 'images'
    model = Image

    def get_queryset(self):
        return Image.objects.filter(user=self.request.user).all()

    def test_func(self):
        return self.request.user.is_authenticated


class UsersImagesView(generic.ListView):
    template_name = 'view_albums.html'
    context_object_name = 'images'
    model = Image

    def get_queryset(self, **kwargs):
        user = User.objects.get(id=self.kwargs['pk'])
        return Image.objects.filter(user=user).all()

    def get_context_data(self, **kwargs):
        user = User.objects.get(id=self.kwargs['pk'])

        context = super(UsersImagesView, self).get_context_data(**kwargs)
        
        context['user'] = User.objects.get(id=self.kwargs['pk'])
        return context


class UserProfileView(generic.DetailView):
    template_name = 'profile.html'
    model = Profile

    def get_context_data(self, **kwargs):
        user = User.objects.get(id=self.kwargs['pk'])
        profile = Profile.objects.get(user=user)

        context = super(UserProfileView, self).get_context_data(**kwargs)
       
        context['profile'] = profile
        return context


def logout_view(request):
    logout(request)