from django import forms
from .models import *



class TodoForm(forms.ModelForm):
    #убрать --- и поставить not selected
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['category'].empty_label = 'not selected'

    class Meta:
        model = Todo
        fields = '__all__'
        exclude = ('date_creation', 'date_completion')
        #кастомизация формы
        widgets = {
            'details' : forms.Textarea(attrs={'rows' : 3, 'class' : 'content_class'}),
            'deadline_date' : forms.DateInput(attrs={'type' : 'date'})
        }

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'


