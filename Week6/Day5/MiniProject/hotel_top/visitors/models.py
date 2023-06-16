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
    thumbnail_url = models.URLField()
    description = models.TextField(null=True, blank=True)

    def __str__(self) :
        return f'{self.room_number} | price: {self.price}$'

class Reservation(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    guest_name = models.CharField(max_length=100)
    guest_email = models.EmailField()
    check_in_date = models.DateField()
    check_out_date = models.DateField()

    def is_available(self):
        reservations = Reservation.objects.filter(room=self.room)
        for reservation in reservations:
            if (self.check_in_date >= reservation.check_in_date and self.check_in_date <= reservation.check_out_date) or \
                (self.check_out_date >= reservation.check_in_date and self.check_out_date <= reservation.check_out_date):
                return False
        return True

    def save(self, *args, **kwargs):
        if self.check_out_date < self.check_in_date:
            raise ValueError("Check-out date must be later than check-in date.")
        if not self.is_available():
            raise ValueError("The room is already reserved for the selected dates.")
        super(Reservation, self).save(*args, **kwargs)

    def __str__(self) :
        return f'{self.room} | guest_name: {self.guest_name} | check in: {self.check_in_date} | check out: {self.check_out_date}'
    

class Review(models.Model):
    room = models.ForeignKey('Room', on_delete=models.CASCADE, related_name='reviews')
    review_text = models.TextField()
    rating = models.IntegerField()
    review_date = models.DateTimeField(auto_now_add=True)

    
    def __str__(self):
        return f'{self.room} {self.review_text}'