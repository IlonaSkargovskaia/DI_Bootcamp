from django.db import models

class Student(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name