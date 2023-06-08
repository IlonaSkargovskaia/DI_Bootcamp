from django.db import models
import datetime

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=50)
    published_date = models.DateField()
    description = models.TextField(null=True, blank=True)
    page_count = models.IntegerField()
    categories = models.CharField(max_length=50)
    thumbnail_url = models.URLField()
    
