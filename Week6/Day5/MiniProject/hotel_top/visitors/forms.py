from django import forms
from .models import *
from django.forms import fields, formset_factory

# class ReviewForm(forms.ModelForm):
    
#     rating = forms.ChoiceField(choices=(('1', 'one'), ('2', 'two'), ('3', 'three'), ('4', 'four'), ('5', 'five')), widget=forms.RadioSelect(attrs={'class': 'inline'}))

#     class Meta:
#         model = Review
#         fields = '__all__'

# class DateInput(forms.DateInput):
#     input_type = 'date'


class ReservationForm(forms.Form):
    guest_name = forms.CharField(max_length=100)
    guest_email = forms.EmailField()
    check_in_date = forms.DateField()
    check_out_date = forms.DateField()