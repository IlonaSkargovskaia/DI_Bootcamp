from django.shortcuts import render
from .models import *
from rest_framework.permissions import (AllowAny,IsAuthenticated)
from .serializers import *
from rest_framework.generics import (ListAPIView)

def home(request):
   return render(request, 'index.html')

class RecipeListView(ListAPIView):
   queryset = Recipe.objects.all()
   serializer_class = RecipeSerializer
   permission_classes = (AllowAny, )