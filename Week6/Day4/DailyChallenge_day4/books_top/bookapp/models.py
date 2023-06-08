from django.db import models
from django.contrib.auth.models import User
import datetime

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=50)
    published_date = models.DateField()
    description = models.TextField(null=True, blank=True)
    page_count = models.IntegerField()
    categories = models.CharField(max_length=50)
    thumbnail_url = models.URLField()

    def __str__(self):
        return f'{self.title} | in: {self.categories}'
    

class BookReview(models.Model):
    book = models.ForeignKey('Book', related_name='reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users_reviews')
    rating = models.IntegerField()
    review_text = models.TextField(null=True, blank=True)

    def __str__(self):
        return f'{self.book} | from: {self.user}'