from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.core.validators import RegexValidator
from django.utils.text import gettext_lazy as _

# Прокат велосипедов и скутеров - Bike And Scooter Rental
class Customer(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(default = 'test@gmail.com')
    phone_number = PhoneNumberField(region='IL')
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=30)
    country = models.CharField(max_length=30)

#Vehicle - транспортное средство
class Vehicle(models.Model):
    vehicle_type = models.ForeignKey('VehicleType', on_delete = models.CASCADE)

    date_created = models.DateTimeField(auto_now_add=True)
    real_cost = models.FloatField()

    size = models.ForeignKey('VehicleSize', on_delete = models.CASCADE)

#тип транспорта
class VehicleType(models.Model):
    name = models.CharField(max_length=100)

#размер
class VehicleSize(models.Model):
    name = models.CharField(max_length=100)

#rental - аренда
class Rental(models.Model):
    rental_date = models.DateTimeField()
    return_date = models.DateTimeField()
    customer = models.ForeignKey('Customer', on_delete=models.CASCADE)
    vehicle = models.ForeignKey('Vehicle', on_delete = models.CASCADE)

#арендная плата
class RentalRate(models.Model):
    #суточная арендная ставка
    daily_rate = models.FloatField()
    vehicle_type = models.ForeignKey('VehicleType', on_delete=models.CASCADE)
    vehicle_size = models.ForeignKey('VehicleSize', on_delete = models.CASCADE)

#место хранения транспорта откуда можно арендовать
#capacity - вместимость
class RentalStation(models.Model):
    name = models.CharField(max_length=100)
    capacity = models.IntegerField()
    address = models.ForeignKey('Address', on_delete=models.CASCADE)


class Address(models.Model):
    address = models.CharField(max_length=100)
    address2 = models.CharField(max_length=100)
    city = models.CharField(max_length=30)
    country = models.CharField(max_length=30)
    postal_code = models.CharField(
        max_length=6,
        validators=[RegexValidator('^[0-9]{6}$', _('Invalid postal code'))],
    )