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

class QuestionBank(models.Model):
    subject = models.CharField(max_length=255)
    grade = models.CharField(max_length=50)
    question = models.TextField()
    options = models.JSONField()       # list of answer options
    correct_answer = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
