from django.shortcuts import render

people_list = [
  {
    'id': 1,
    'name': 'Bob Smith',
    'age': 35,
    'country': 'USA'
  },
  {
    'id': 2,
    'name': 'Martha Smith',
    'age': 60,
    'country': 'USA'
  },
  {
    'id': 3,
    'name': 'Fabio Alberto',
    'age': 18,
    'country': 'Italy'
  },
  {
    'id': 4,
    'name': 'Dietrich Stein',
    'age': 85,
    'country': 'Germany'
  }
]

def people(request):
    context = {'people' : sorted(people_list, key=lambda x: x['age'])}
    
    return render(request, 'people.html', context)


def person(request, id):
    context = {'people' : people_list}
    context['id'] = id

    return render(request, 'person.html', context)