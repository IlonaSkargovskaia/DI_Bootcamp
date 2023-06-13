from django.contrib import admin
from .models import *
# from .forms import *

admin.site.register(Room)
# admin.site.register(Client)
admin.site.register(RoomSize)
admin.site.register(RoomType)
admin.site.register(Review)
admin.site.register(Reservation)
