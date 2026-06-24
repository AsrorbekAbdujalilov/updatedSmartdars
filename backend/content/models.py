from django.db import models

class News(models.Model):
    title = models.CharField(max_length=500)
    content = models.TextField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Testimonial(models.Model):
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    text = models.TextField()
    avatar = models.CharField(max_length=500, blank=True)
    is_active = models.BooleanField(default=True)


