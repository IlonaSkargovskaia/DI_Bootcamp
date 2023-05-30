from django.shortcuts import render
from .models import Person

def phonenumber(request, number):

    try:
        person = Person.objects.get(phone_number = number)
    except Person.DoesNotExist:
        person = None

    context = {
        'person' : person
    }

    return render(request, 'number.html', context)

def name(request, input_name):
    #нужно перехватить ошибку чтобы перешло к else
    try: 
        person = Person.objects.get(name = input_name)
    except Person.DoesNotExist:
        person = None

    context = {
        'person' : person
    }

    return render(request, 'name.html', context)