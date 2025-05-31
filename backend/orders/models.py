# app/models.py
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)       # 책 제목
    subject = models.CharField(max_length=100)     # 과목명
    professor = models.CharField(max_length=100)   # 교수명
    price = models.IntegerField(default=0)         # 가격 등 기타 필드

    def __str__(self):
        return self.title
