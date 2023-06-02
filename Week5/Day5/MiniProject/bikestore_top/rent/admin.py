from django.contrib import admin
from .models import *
from .forms import *

class VehicleAdmin(admin.ModelAdmin):
    list_display = ['vehicle_type', 'size', 'real_cost', 'date_created']

class CustomerAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'email', 'city', 'country']

admin.site.register(Customer, CustomerAdmin)
admin.site.register(Vehicle, VehicleAdmin)
admin.site.register(VehicleType)
admin.site.register(VehicleSize)
admin.site.register(Rental)
admin.site.register(RentalRate)
admin.site.register(RentalStation)
admin.site.register(Address)
# Register your models here.
