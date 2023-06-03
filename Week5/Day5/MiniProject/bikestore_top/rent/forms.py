from django import forms
from .models import *


class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = '__all__'


class VehicleForm(forms.ModelForm):
    class Meta:
        model = Vehicle
        fields = '__all__'


class NewRentalForm(forms.ModelForm):
    class Meta:
        model = Rental
        fields = '__all__'

        widgets = {
            
            'rental_date' : forms.DateInput(attrs={'type' : 'date'}),
            'return_date' : forms.DateInput(attrs={'type' : 'date'})
        }

