from django.shortcuts import render, redirect
from datetime import date
from .models import *
from .forms import *

current_category = Category.objects.get(name = 'work')

def add_task(request):

    if request.method == 'POST':
        data = request.POST
        filled_form = TodoForm(data)

        if filled_form.is_valid():
            filled_form.save()

    
    todo_form = TodoForm(initial={'category' : current_category})
    context = {'form' : todo_form}

    return render(request, 'add_task.html', context)


def display_todos(request):

    context = {
        'title' : 'List of todos',
        'todos' : Todo.objects.all().order_by('id')
    }

    return render(request, 'todos.html', context)
