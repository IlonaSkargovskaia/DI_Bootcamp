from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):

   class Meta:
       model = Category
       fields = ('id', 'name',)


class IngredientSerializer(serializers.ModelSerializer):

   class Meta:
       model = Ingredient
       fields = ('id', 'name',)


class RecipeSerializer(serializers.ModelSerializer):

   class Meta:
       model = Recipe
       fields = (
           'id',
           'title',
           'description',
           'ingredients',
           'instructions',
           'category',
           'author',
           )