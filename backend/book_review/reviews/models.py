from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Review(models.Model):
    book_title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    review_text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.book_title} - {self.rating}★"