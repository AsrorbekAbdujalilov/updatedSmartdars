from django.contrib import admin
from .models import News, Testimonial, QuestionBank

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'is_active']
    list_filter = ['is_active']

@admin.register(QuestionBank)
class QuestionBankAdmin(admin.ModelAdmin):
    list_display = ['subject', 'grade', 'question', 'correct_answer', 'created_at']
    list_filter = ['subject', 'grade']
