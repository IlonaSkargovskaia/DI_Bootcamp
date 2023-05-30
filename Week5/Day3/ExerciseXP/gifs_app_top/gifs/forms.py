from django import forms
from .models import Gif, Category

class GifForm(forms.ModelForm):
      class Meta:      
            model = Gif
            fields = '__all__'