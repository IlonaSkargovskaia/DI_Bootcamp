from django.urls import path 
from . import views 

# one urlpattern per line
urlpatterns = [
    path('people', views.people, name='people_list'),
    path('people/<int:id>', views.person, name='person_view')
]