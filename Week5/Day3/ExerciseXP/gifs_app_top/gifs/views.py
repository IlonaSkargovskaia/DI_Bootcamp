from django.shortcuts import render
from .models import Gif, Category


def homepage(request):

    context = {
        'title' : 'Homepage Gifs',
        'gifs' : Gif.objects.all(),
    }

    return render(request, 'home.html', context)

def category(request, cat_id):

    context = {
        'title' : 'Category Gifs',
        'category' : Category.objects.get(id = cat_id)
    }

    return render(request, 'category.html', context)

def categories(request):

    context = {
        'title' : 'List of categories',
        'categories' : Category.objects.all()
    }

    return render(request, 'categories.html', context)

def gif_view(request, gif_id):

    context = {
        'title' : 'Info about gif by id',
        'gif_id' : Gif.objects.get(id = gif_id),
        # 'category' : Category.objects.get()
    }

    return render(request, 'gif_view.html', context)