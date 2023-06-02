from django.shortcuts import render, redirect
import datetime
from .models import *
from .forms import *

current_category = Category.objects.get(name = 'work')

def add_task(request):

    #POST
    if request.method == 'POST':
        data = request.POST
        filled_form = TodoForm(data)

        if filled_form.is_valid():
            filled_form.save()
        else:
            #если форма не валидная показать ошибку в терминале
            print(filled_form.errors)

    #GET
    todo_form = TodoForm()
    context = {'form' : todo_form}

    return render(request, 'add_task.html', context)

#чтобы не было ошибки добавляем форму для добавления категории
def add_category(request):

    #POST
    if request.method == 'POST':
        data = request.POST
        filled_form = CategoryForm(data)

        if filled_form.is_valid():
            filled_form.save()
        else:
            #если форма не валидная показать ошибку в терминале
            print(filled_form.errors)

    #GET
    category_form = CategoryForm()
    context = {'form' : category_form}

    return render(request, 'add_category.html', context)


def display_todos(request):

    context = {
        'todos': Todo.objects.all(),
    }

    return render(request, 'all-todos.html', context)

def todo_done(request, id):
    task = Todo.objects.get(id=id)

    if request.method == "POST":
        if 'done' in request.POST:
            task.has_been_done = True
            task.date_completion = datetime.datetime.now()
            task.save()
        elif 'undone' in request.POST:
            task.has_been_done = False
            task.date_completion = None
            task.save()

    return redirect('all_todos')