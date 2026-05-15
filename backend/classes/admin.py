from django.contrib import admin
from .models import AppUser, Class, Lesson, Quiz, QuizResult

admin.site.register(AppUser)
admin.site.register(Class)
admin.site.register(Lesson)
admin.site.register(Quiz)
admin.site.register(QuizResult)
