from rest_framework import viewsets
from .models import Review
from .serializers import ReviewSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all().order_by('-date_added')
    serializer_class = ReviewSerializer