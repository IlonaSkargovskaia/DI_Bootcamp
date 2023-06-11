from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from .models import Post
from .serializers import PostSerializer
# Create your views here.


# @csrf_exempt
# def post_view(request):
#     #GET
#     queryset = Post.objects.all()
#     serializer = PostSerializer(queryset, many = True)
#     return JsonResponse(data=serializer.data, safe=False) 

#safe - dict / OrderedDict

class PostView(APIView):

    def get(self, request, *args, **kwargs):
        #kwargs = key value arguments ({'pk':1})
        if 'pk' in kwargs:
            post = Post.objects.get(id=kwargs['pk'])
            serializer = PostSerializer(post)
            return Response(serializer.data)
        else:
            queryset = Post.objects.all()
            serializer = PostSerializer(queryset, many = True)
            return Response(serializer.data)
        
    def post(self, request, *args, **kwargs):
        serializer = PostSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,  status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

#update = put
def put(self, request, pk, *args, **kwargs):
    post = Post.objects.get(id=pk)
    serializer = PostSerializer(post, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


#delete
def delete(self, request, pk, *args, **kwargs):
    post = Post.objects.get(id=pk)
    post.delete()
    return Response()