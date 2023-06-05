from django.urls import path,include #path function
from . import views # . is shorthand for the current directory

# one urlpattern per line
urlpatterns = [
    #path('posts/', views.posts, name='posts'),
    path('posts/', views.PostList.as_view(), name='posts'),
    
    path('profile_user/', views.profile, name='profile'),
    path('profile/', views.profile_user, name='profile_user'),
    # path('add-category/', views.add_category_view, name='add_category'),
    #добавляем ссылку на новую функцию из view
    path('add-category/', views.AddCategoryView.as_view(), name='add_category'),
    
    #path('add-post/', views.add_post_view, name='add_post'),
    path('add-post/', views.AddPostView.as_view(), name='add_post')
]

# '' : empty string and /
# views.index : index function in views.py
# name='index' : name of the route