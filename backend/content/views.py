from rest_framework import viewsets, permissions
from .models import News, Testimonial
from .serializers import NewsSerializer, TestimonialSerializer

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.filter(is_active=True)
    serializer_class = NewsSerializer
    permission_classes = [permissions.AllowAny]

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.filter(is_active=True)
    serializer_class = TestimonialSerializer
    permission_classes = [permissions.AllowAny]
