# app/views.py
from django.http import JsonResponse
from django.db.models import Q
from .models import Book

def book_search_view(request):
    query = request.GET.get('query', '').strip()

    if query == '':
        return JsonResponse([], safe=False)

    books = Book.objects.filter(
        Q(title__icontains=query) |
        Q(subject__icontains=query) |
        Q(professor__icontains=query)
    )

    result = list(books.values('id', 'title', 'subject', 'professor', 'price'))
    return JsonResponse(result, safe=False)
