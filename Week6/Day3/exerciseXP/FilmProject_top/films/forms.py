from django import forms
from .models import *
from django.forms import fields 


class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = '__all__'


class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'


class ReviewForm(forms.ModelForm):
    
    rating = forms.ChoiceField(choices=(('1', 'one'), ('2', 'two'), ('3', 'three'), ('4', 'four'), ('5', 'five')), widget=forms.RadioSelect(attrs={'class': 'inline'}))

    class Meta:
        model = Review
        fields = '__all__'


class AddPosterForm(forms.ModelForm):
    class Meta:
        model = Poster
        fields = '__all__'    

    def __init__(self, *args, **kwargs):
        super(AddPosterForm, self).__init__(*args, **kwargs)
        self.fields['image'].required = False   