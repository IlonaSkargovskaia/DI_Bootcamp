from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Report
from .serializers import ReportSerializer
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT


from rest_framework import generics
from rest_framework import mixins

from rest_framework import permissions
from .permissions import IsForecaster


# class ReportView(APIView):
#     def get (self, request, *args, **kwargs):
#         if 'pk' in kwargs:
#             report = Report.objects.get(id=kwargs['pk'])
#             serializer = ReportSerializer(report)
#             return Response(serializer.data)
#         else:
#             queryset = Report.objects.all()
#             serializer = ReportSerializer(queryset, many=True)
#             return Response(serializer.data)
        
#     def post(self, request, *args, **kwargs):
#         serializer = ReportSerializer(data = request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
        
#     def put(self, request, pk, *args, **kwargs):
#         location = Report.objects.get(id=pk)
#         serializer = ReportSerializer(location, data=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors)
        

#     def delete(self, request, pk, *args, **kwargs):
#         location = Report.objects.get(id=pk)
#         location.delete()

#         return Response(status=HTTP_204_NO_CONTENT)
    

# class ReportMixinView(generics.ListCreateAPIView):
#     queryset = Report.objects.all()
#     serializer_class = ReportSerializer

#get function one post
class ReportDetailView(generics.RetrieveAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class ReportDeleteView(generics.DestroyAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsForecaster) 

class ReportListView(generics.ListAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
