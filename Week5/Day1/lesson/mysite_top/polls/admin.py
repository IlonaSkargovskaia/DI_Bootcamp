from django.contrib import admin
from .models import Person, Post, Category, Email, Address

admin.site.register(Person)
admin.site.register(Post)
admin.site.register(Category)
admin.site.register(Email)
admin.site.register(Address)
# Register your models here.
