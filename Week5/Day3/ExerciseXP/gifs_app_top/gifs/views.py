from django.shortcuts import render
from .models import Gif, Category


def homepage(request):

    context = {
        'title' : 'Homepage Gifs',
        'gifs' : Gif.objects.all()
    }

    return render(request, 'home.html', context)