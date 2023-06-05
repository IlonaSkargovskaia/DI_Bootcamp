from django.shortcuts import render
from .models import *
from .forms import *
import datetime






#home_page
def home(request):
    context = {
        'page_title': "Bike and Scooter Rental",
    }
    return render(request, 'index.html', context)


def all_rentals(request):
    context = {
        'page_title' : "All rentals",
        'rental' : Rental.objects.all().order_by('-return_date')
    }

    return render(request, 'rentals.html', context)



def rental(request, pk):
    given_rental = Rental.objects.get(id=pk)

    if request.method == "POST":
        given_rental.return_date = datetime.datetime.now()
        given_rental.save()

    context = {
        'page_title': f'Rental №{given_rental.id}',
        'rental': given_rental,
    }

    return render(request, 'rental.html', context)


def add_rental(request):
    if request.method == 'POST':
        data = request.POST
        filled_form = NewRentalForm(data)
        if filled_form.is_valid():
            filled_form.save()

    rental_form = NewRentalForm()
    context = {'page_title' : 'Add new rental', 'form' : rental_form}

    return render(request, 'add_rental.html', context)


def all_customers(request):
    context = {
        'page_title' : "All customers ASC",
        'customers' : Customer.objects.all().order_by('first_name')
    }

    return render(request, 'customers.html', context)

def customer(request, pk):
    customer = Customer.objects.get(id = pk)
    rentals = Rental.objects.filter(customer=customer)
    context = {
        'page_title' : f'Customer №{customer.id}',
        'customer' : customer,
        'rentals' : rentals
    }

    return render(request, 'customer.html', context)

def add_customer(request):
    if request.method == 'POST':
        data = request.POST
        filled_form = CustomerForm(data)
        if filled_form.is_valid():
            filled_form.save()

    customer_form = CustomerForm()
    context = {'page_title' : 'Add new customer', 'form' : customer_form}

    return render(request, 'add_customer.html', context)


def all_vehicles(request):
    vehicles = Vehicle.objects.all().order_by('vehicle_type')
    

    context = {
        'page_title' : "All vehicles",
        'vehicles' : vehicles
    }

    return render(request, 'vehicles.html', context)


def vehicle(request, pk):
    vehicle = Vehicle.objects.get(id = pk)
    rental = Rental.objects.filter(vehicle=pk)
    
    context = {
        'page_title' : f"Vehicle '{vehicle.vehicle_type}'",
        'vehicle' : vehicle,
        'rental': rental
    }

    return render(request, 'vehicle.html', context)


def add_vehicle(request):
    if request.method == 'POST':
        data = request.POST
        filled_form = VehicleForm(data)
        if filled_form.is_valid():
            filled_form.save()
        else:
            print(filled_form.errors)

    vehicle_form = VehicleForm()
    context = {'page_title' : 'Add new vehicle', 'form' : vehicle_form}

    return render(request, 'add_vehicle.html', context)





