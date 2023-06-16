from django.db.models.signals import post_save 
from django.dispatch import receiver 
from django.contrib.auth.models import User, Group
from .models import UserProfile, Image

@receiver(post_save, sender = User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
        

@receiver(post_save, sender = Image) 
def increase_image_qty(sender, instance, created, **kwargs):
    if created:
        user_image = instance.author
        item = UserProfile.objects.get(user = user_image)
        item.images_number += 1
        item.save()