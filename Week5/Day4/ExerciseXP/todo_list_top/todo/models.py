from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=20)
    image = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.name
    

class Todo(models.Model):
    title = models.CharField(max_length=100)
    details = models.TextField()
    has_been_done = models.BooleanField(default=False, blank=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    date_completion = models.DateField(blank=True, null=True)
    deadline_date = models.DateField(null=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='todos')

    def __str__(self):
        return f'{self.category.name} | {self.title}'
    
    