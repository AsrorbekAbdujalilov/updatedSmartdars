from django.db import models

class AppUser(models.Model):  # platform users (teachers/students)
    id = models.CharField(primary_key=True, max_length=50)
    data = models.JSONField()   # keep flexible for now, refactor later

class Class(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    data = models.JSONField()

class Lesson(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    data = models.JSONField()

class Quiz(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    data = models.JSONField()

class QuizResult(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    data = models.JSONField()
