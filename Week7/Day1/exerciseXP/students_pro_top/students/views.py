from django.shortcuts import render, get_object_or_404
from .models import Student
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from .serializers import StudentSerializer


class StudentListView(APIView):
    
    # DailyChallenge
    def get(self, request, *args, **kwargs):
        
        date_joined = self.request.query_params.get('date_joined', None)
        
        if date_joined is not None:
            queryset = Student.objects.filter(date_joined = date_joined)
        else: 
            queryset = Student.objects.all()
            
        serializer = StudentSerializer(queryset, many = True)
        return Response(serializer.data, status=HTTP_201_CREATED)    
        
    

    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,  status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
    


class StudentDetailView(APIView):

    def get(self, request, pk, *args, **kwargs):
        student = get_object_or_404(Student, id=pk)
        serializer = StudentSerializer(student)
        return Response(serializer.data, status=HTTP_200_OK)
          

    def put(self, request, pk, *args, **kwargs):
        student = Student.objects.get(id=pk)
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        student = Student.objects.get(id=pk)
        student.delete()
        return Response(status=HTTP_204_NO_CONTENT)