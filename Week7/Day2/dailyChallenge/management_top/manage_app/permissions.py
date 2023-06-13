from rest_framework import permissions
from .models import DepartmentAdmin

class IsDepartmentAdmin(permissions.BasePermission):

    def has_object_permission(self, request, admin):
        return hasattr(request.user, 'departmentadmin')
        