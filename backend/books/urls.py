# backend/books/urls.py

from django.urls import path
from .views import book_search_view

urlpatterns = [
    path('search/', book_search_view, name='book_search'),
]
