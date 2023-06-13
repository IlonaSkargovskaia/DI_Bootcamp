from rest_framework import permissions

class IsOwner(permissions.BasePermission):

    #проверить что-то конкретное в определенном посте
    def has_object_permission(self, request, view, obj):

        #SAFE_METHODS - GET, HEAD, OPTIONS
        if request.method in permissions.SAFE_METHODS:
            return True

        elif request.user == obj.author:
            return True
        else:
            return False
        