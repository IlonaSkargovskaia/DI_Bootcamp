from django import forms
from .models import *

class TodoForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = '__all__'
        # exclude = ('author', )
        # #кастомизация формы
        # widgets = {
        #     'author' : forms.HiddenInput(), #не будет видно юзеру, но будет внутри формы
        #     'content' : forms.Textarea(attrs={'rows' : 3, 'class' : 'content_class'})
        # }

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'