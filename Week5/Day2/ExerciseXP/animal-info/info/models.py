from django.db import models

class Animal(models.Model):
    name = models.CharField(max_length=30)
    legs = models.IntegerField()
    weight = models.FloatField()
    height = models.FloatField()
    speed = models.IntegerField()
    family = models.ForeignKey('Family', on_delete = models.SET_NULL, null=True)

class Family(models.Model):
    name = models.CharField(max_length=30)


