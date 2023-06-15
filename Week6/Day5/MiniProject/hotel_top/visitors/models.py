from django.db import models
from datetime import datetime


class Hotel(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    description = models.TextField()
    amenities = models.TextField()
    rating = models.DecimalField(max_digits=3, decimal_places=2)

    def __str__(self) :
        return self.name

class Room(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    room_number = models.CharField(max_length=10)
    room_type = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    availability = models.BooleanField(default=True)

    def __str__(self) :
        return f'{self.hotel} | room num: {self.room_number} | price: {self.price}'

class Reservation(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    guest_name = models.CharField(max_length=100)
    guest_email = models.EmailField()
    check_in_date = models.DateField()
    check_out_date = models.DateField()

    def __str__(self) :
        return f'{self.room} | check in: {self.check_in_date} | check out: {self.check_out_date}'