from django.db import models
from django.contrib.auth.models import User
from films.models import Film


#профиль пользователя
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    favorite_films = models.ManyToManyField(Film, related_name='favorite_films')
   
    def __str__(self):
        return f'Profile: {self.user.username}'
