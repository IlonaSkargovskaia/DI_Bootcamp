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
    
    #сортирую по возрасту list from dict
    newlist = sorted(people_list, key=lambda x: x['age'])
    # [{'id': 3, 'name': 'Fabio Alberto', 'age': 18, 'country': 'Italy'}, {'id': 1, 'name': 'Bob Smith', 'age': 35, 'country': 'USA'}, {'id': 2, 'name': 'Martha Smith', 'age': 60, 'country': 'USA'}, {'id': 4, 'name': 'Dietrich Stein', 'age': 85, 'country': 'Germany'}]
    
    
    context = {}
    for id, value in enumerate(newlist):
        #{0, {'id': 3, 'name': 'Fabio Alberto', 'age': 18, 'country': 'Italy'}}
        context[id] = value


    return render(request, 'people.html', context)

