#post_save - после сохранения что произойдет
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User, Group
from .models import UserProfile

#User send a post_save signal...receiver function create NEW UserProfile

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
        
#автоматически добавлять пользователя в группу чтобы дать какие-то разрешения

# @receiver(post_save, sender=User)      
# def attach_user_group(sender, instance, created, **kwargs):    
#     if created:  
#         #если пользователь не админ добавить в группу guests
#         if not instance.is_staff:
#             group = Group.objects.get(name='guests')
#             instance.groups.add(group)
   