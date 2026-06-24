from django.db import models
from django.conf import settings
import uuid

# Classes, Lessons, and Quizzes use JSONField for flexible dynamic content,
# but we add an owner to link them to the CoinUser.
class Class(models.Model):
    id = models.CharField(primary_key=True, max_length=50, default=uuid.uuid4, editable=False)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='classes', null=True, blank=True)
    title = models.CharField(max_length=255, blank=True, default='')
    data = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)

class Lesson(models.Model):
    id = models.CharField(primary_key=True, max_length=50, default=uuid.uuid4, editable=False)
    class_ref = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='lessons', null=True, blank=True)
    title = models.CharField(max_length=255, blank=True, default='')
    data = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)

class Quiz(models.Model):
    id = models.CharField(primary_key=True, max_length=50, default=uuid.uuid4, editable=False)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='quizzes', null=True, blank=True)
    title = models.CharField(max_length=255, blank=True, default='')
    data = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)

class QuizResult(models.Model):
    id = models.CharField(primary_key=True, max_length=50, default=uuid.uuid4, editable=False)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='results')
    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='quiz_results', null=True, blank=True)
    data = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)

class QuestionBank(models.Model):
    id = models.CharField(primary_key=True, max_length=50, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='questions')
    subject = models.CharField(max_length=255)
    topic = models.CharField(max_length=255)
    difficulty = models.CharField(max_length=50)
    question_text = models.TextField()
    option_a = models.TextField()
    option_b = models.TextField()
    option_c = models.TextField()
    option_d = models.TextField()
    correct_answer = models.CharField(max_length=1) # A, B, C, D
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.subject} - {self.topic} ({self.difficulty})"
