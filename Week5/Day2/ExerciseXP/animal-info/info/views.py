from django.shortcuts import render
from .models import Animal, Family


def animals(request):

    #all animals from the DataBase

    context = {
        'page_title' : "All animals list",
        'animals' : Animal.objects.all()
    }

    return render(request, 'animals.html', context)


def animal(request, animal_id):

    #one animal with users id
    context = {
        'animal' : Animal.objects.get(id = animal_id)
    }

    return render(request, 'animal.html', context)

def family(request, family_id):
    # list of all animals in family_category

    context = {
        'family' : Family.objects.get(id = family_id),
        'animals' : Animal.objects.filter(family = family_id)
    }
            

    return render(request, 'family.html', context)


