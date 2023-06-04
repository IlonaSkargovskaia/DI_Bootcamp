from django.shortcuts import render
from .models import Gif, Category
from .forms import *


def add_gif(request):

    if request.method == 'POST':
            data = request.POST
            filled_form = GifForm(data)
            # сохраняем в БД
            filled_form.save()

    add_form = GifForm()
    context = {'form' : add_form}

    return render(request, 'add_gifs.html', context)

def add_category(request):

    if request.method == 'POST':
            data = request.POST
            filled_form = CategoryForm(data)
            # сохраняем в БД
            filled_form.save()

    add_category = CategoryForm()
    context = {'form' : add_category}

    return render(request, 'add_category.html', context)

def homepage(request):

    context = {
        'title' : 'Homepage Gifs',
        'gifs' : Gif.objects.all().order_by('id'),
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
        'categories' : Category.objects.all().order_by('id')
    }

    return render(request, 'categories.html', context)

def gif_view(request, gif_id):

    gif = Gif.objects.get(id = gif_id)
    gif_categories = gif.categories.all()

    context = {
        'title' : 'Info about gif by id',
        'gif_id' : gif,
        'categories': gif_categories
    }

    return render(request, 'gif_view.html', context)
