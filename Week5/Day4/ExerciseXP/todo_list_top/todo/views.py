from django.shortcuts import render
from datetime import date
from .models import *
from .forms import *

def add_task(request):

    if request.method == 'POST':
        data = request.POST
        filled_form = TodoForm(data)
        # сохраняем в БД
        filled_form.save()

    
    todo_form = TodoForm()
    context = {'form' : todo_form}

    return render(request, 'add_task.html', context)
