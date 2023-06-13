from rest_framework import permissions

class IsForecaster(permissions.BasePermission):

    #проверить что-то конкретное в определенном посте
    def has_permission(self, request, view):

        user = request.user

        if hasattr(user, 'forecaster'):
            return True
        else:
            return False
