# backend/bbook/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('books.urls')),  # ✅ books 앱의 urls.py로 연결
]
