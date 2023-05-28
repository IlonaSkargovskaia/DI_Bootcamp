from django.shortcuts import render
import json

filename = '/Users/ilona/Desktop/DI_Bootcamp/DI_Bootcamp/Week5/Day1/ExerciseXP/animal-info/animals.json'

with open(filename, 'r') as json_file:
    data = json.load(json_file)
    
#id - чило которое вводит пользователь в строке браузера
# дальше нужно сравнить  id пользователя и id в dict python from json

def animal(request, id):
    context = ''
    for animal in data['animals']:
        if animal['id'] == id:
            context = animal

    return render(request, 'animal.html', context)

def family(request, id):
    context = {}
    context['animals_list'] = []
    for animal in data['animals']:
        if animal['family'] == id:
            context['animals_list'].append(animal['name'])
            

    return render(request, 'family.html', context)


