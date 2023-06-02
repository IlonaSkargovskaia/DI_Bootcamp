from django.shortcuts import render
from .models import *
from .forms import *


def all_customers(request):
    context = {
        'page_title' : "All customers ASC",
        'customers' : Customer.objects.all().order_by('first_name')
    }

    return render(request, 'customers.html', context)

def customer(request, pk):
    customer = Customer.objects.get(id = pk)
    context = {
        'page_title' : "Customer",
        'customer' : customer
    }

    return render(request, 'customer.html', context)

def add_customer(request):
    if request.method == 'POST':
        data = request.POST
        filled_form = CustomerForm(data)
        if filled_form.is_valid():
            filled_form.save()

    #GET
    customer_form = CustomerForm()
    context = {'page_title' : 'Add new customer', 'form' : customer_form}

    return render(request, 'add_customer.html', context)
