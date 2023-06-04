from django.db import models
import datetime

# Many to many
class Country(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Film(models.Model):
    title = models.CharField(max_length=50)

    release_date = models.DateField(default=datetime.date.today) 
    created_in_country = models.ForeignKey('Country', on_delete=models.CASCADE, related_name='created_country')

    available_in_countries = models.ManyToManyField('Country')
    category = models.ManyToManyField('Category')
    director = models.ManyToManyField('Director')

    def __str__(self):
        return f'{self.title}'

class Director(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    
class Review(models.Model):
    film = models.ForeignKey('Film', on_delete=models.CASCADE, related_name='reviews')
    review_text = models.TextField()
    rating = models.IntegerField()
    review_date = models.DateTimeField(default=datetime.datetime.now())

    def __str__(self):
        return f'{self.film} {self.review_text}'