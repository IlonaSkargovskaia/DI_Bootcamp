from django import forms
from .models import *



class TodoForm(forms.ModelForm):

    class Meta:
        model = Todo
        fields = '__all__'
        exclude = ('date_creation', 'date_completion')
        #кастомизация формы
        widgets = {
            'details' : forms.Textarea(attrs={'rows' : 3, 'class' : 'content_class'})
        }

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'