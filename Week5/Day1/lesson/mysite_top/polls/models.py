from django.db import models


class Person(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name


# Many to many
class Post(models.Model):
    #model = table
    title = models.CharField(max_length=50)
    content = models.TextField()

    author = models.ForeignKey('Person', on_delete = models.CASCADE)

    date_created = models.DateTimeField(auto_now_add=True) 
    category = models.ManyToManyField('Category')



class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Email(models.Model):
    person = models.OneToOneField(Person, on_delete=models.CASCADE, primary_key = True)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email
    
#many to many
class Address(models.Model):
    people = models.ManyToManyField('Person', related_name = 'addresses')
    location = models.CharField(max_length=100)

    def __str__(self) :
        return self.location




# # Create a table, primary key - automaticaly. One to many
# class Post(models.Model):
#     #model = table
#     title = models.CharField(max_length=50)
#     content = models.TextField()
#     author = models.CharField(max_length=50)
#     date_created = models.DateTimeField(auto_now_add=True) 
#     category = models.ForeignKey('Category', on_delete = models.SET_NULL, null=True)
#     #auto_now_add - равно на момент создания дата