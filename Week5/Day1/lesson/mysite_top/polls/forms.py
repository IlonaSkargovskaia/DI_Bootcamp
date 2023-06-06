from django import forms
from .models import Category, Post

class SearchForm(forms.Form):
    query = forms.CharField(max_length=20)

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = '__all__'
        # exclude = ('author', )
        #кастомизация формы
        widgets = {
            'author' : forms.HiddenInput(), #не будет видно юзеру, но будет внутри формы
            'content' : forms.Textarea(attrs={'rows' : 3, 'class' : 'content_class'})
        }

    #хочу проверить поле формы через валидацию
    def clean_title(self):
        title = self.cleaned_data['title']
        if 'Django' in title:
            raise forms.ValidationError('Cannot include Django in the title')
        else:
            return title

    #когда хотим проверить все введенные поля на понятный для python язык
    def clean(self):
        #это {} который имеет внутри себя все поля
        cleaned_data = super().clean()
        content = cleaned_data['content']
        author = cleaned_data['author']

        #если одновременно юзер нейм - Илона и django есть в контексте - ошибка
        if author.user.username == 'ilona' and 'Django' in content:
         #если одновременно юзер - админ и django есть в контексте - ошибка
        # if author.user.is_stuff and 'Django' in content:
            raise forms.ValidationError('Cannot be ilona and write about Django')
        else:
            return cleaned_data