from django import forms
from .models import *
from django.forms import fields, formset_factory


class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = '__all__'
        widgets = {
            'release_date' : forms.DateInput(attrs={'type' : 'date'}) 
        }
    #проверяем что дата не может быть в будущем
    def clean_release_date(self):
        today = timezone.now().date()
        release_date = self.cleaned_data.get('release_date')
        if release_date > today:
            raise forms.ValidationError('Release date cannot be in the future')
        return release_date


class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'

class ProducerForm(forms.ModelForm):
    class Meta:
        model = Producer
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


ProducerFormSet = forms.modelformset_factory(model=Producer, form=ProducerForm)