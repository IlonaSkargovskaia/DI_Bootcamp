from django.db import models
from django.contrib.auth.models import User

class Department(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    

    def __str__(self):
        return self.name


class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    department = models.ForeignKey('Department', on_delete=models.CASCADE, related_name='employee')

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    employees = models.ManyToManyField("Employee")

    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    due_date = models.DateField()
    completed = models.BooleanField(default=False)
    project = models.ForeignKey('Project', on_delete=models.CASCADE, related_name='task')

    def __str__(self):
        return self.name
    

class DepartmentAdmin(models.Model):
    admin = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

