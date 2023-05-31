from django.shortcuts import render
from .models import Person
from .forms import PhoneForm

def search_phone(request):

    if request.method == 'POST':
        
        phone_form = PhoneForm(request.POST)
        if phone_form.is_valid()
#спросить у Юры как сделать redirect а вернее проверить на условие валидации...не догоняю эту тему
    return render(request, 'search-phone.html')
    

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