from rest_framework import serializers
from .models import Post
from django.contrib.auth.models import User



class PostSerializer(serializers.ModelSerializer):

    author = serializers.HyperlinkedRelatedField(view_name='user-detail', queryset=User.objects.all())
    class Meta:
        model = Post
        fields = ('title','category','publish_date','last_updated', 'author')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', )