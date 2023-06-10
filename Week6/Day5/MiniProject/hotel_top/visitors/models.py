from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Room(models.Model):
    image = models.URLField(null = True, blank = True)
    room_num = models.IntegerField()
    avaliable = models.BooleanField(default = True)
    room_size = models.ForeignKey('RoomSize', on_delete=models.CASCADE, related_name="sizes")
    room_type = models.ForeignKey('RoomType', on_delete=models.CASCADE, related_name="types")
    price = models.IntegerField()
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.room_num} | size: {self.room_size} | type: {self.room_type}'
    
class Client(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(unique=True, blank=True, null=True)
    phone_number = PhoneNumberField(region='IL')
    
    
    def __str__(self):
        return f'{self.first_name} | {self.room_num}'
    

class RoomSize(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name
    
class RoomType(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Review(models.Model):
    room = models.ForeignKey('Room', on_delete=models.CASCADE, related_name='reviews')
    review_text = models.TextField()
    rating = models.IntegerField()
    review_date = models.DateTimeField(auto_now_add=True)

    

    def __str__(self):
        return f'{self.room} {self.review_text}'
    

class Reservation(models.Model):
    check_in = models.DateTimeField(auto_now_add=True)
    check_out = models.DateTimeField()
    client = models.OneToOneField('Client', on_delete=models.CASCADE)
    room_num = models.ForeignKey('Room', on_delete=models.CASCADE, related_name="rooms")