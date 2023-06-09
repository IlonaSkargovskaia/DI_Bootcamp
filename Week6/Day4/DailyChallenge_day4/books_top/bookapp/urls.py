from django.urls import path
from . import views 

urlpatterns = [
    path('', views.HomePageView.as_view(), name="home"),
    path('search/', views.SearchResultsView.as_view(), name="search_results"),
    path('detail/<pk>', views.BookDetailView.as_view(), name="book_detail"),
    path('add-review/', views.ReviewCreateView.as_view(), name='add_review'),
]