from django.shortcuts import render
from .models import Person

def phonenumber(request, number):
    context = {
        'person' : Person.objects.get(phone_number = number)
    }

    return render(request, 'number.html', context)

def name(request, input_name):
    context = {
        #получаю имя и сравниваю с введенным пользователем
        'person' : Person.objects.get(name = input_name)
    }

    return render(request, 'name.html', context)