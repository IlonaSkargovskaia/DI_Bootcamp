from django import forms
from .models import *
from django.utils.translation import gettext_lazy as _

class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = '__all__'


class VehicleForm(forms.ModelForm):
    class Meta:
        model = Vehicle
        fields = '__all__'
        
# 'deadline_date' : forms.DateInput(attrs={'type' : 'date'}

class NewRentalForm(forms.ModelForm):
    class Meta:
        model = Rental
        fields = '__all__'

        widgets = {
            
            'rental_date' : forms.DateInput(attrs={'type' : 'date'}),
            'return_date' : forms.DateInput(attrs={'type' : 'date'})
        }

        