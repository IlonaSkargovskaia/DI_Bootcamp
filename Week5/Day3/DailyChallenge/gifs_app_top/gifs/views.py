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

    this_gif = Gif.objects.get(id = gif_id)

    if request.method == "POST":
        if 'like' in request.POST:
            this_gif.likes += 1
            this_gif.save()
        elif 'dislike' in request.POST:
            this_gif.likes -= 1
            this_gif.save()

    context = {
        'gif': this_gif,
    }
    return render(request, 'gif_view.html', context)



def likes(request):
    gifs = Gif.objects.all()
    gifs = [gif for gif in gifs if gif.likes > 0]

    context = {
         'gifs' : sorted(gifs, key=lambda x: x.likes, reverse=True)
    }


    return render(request, 'likes.html', context)