from django.contrib import admin
from .models import TopTeacherReward

@admin.register(TopTeacherReward)
class TopTeacherRewardAdmin(admin.ModelAdmin):
    list_display = ['email', 'full_name', 'status', 'month', 'year', 'created_at']
    list_filter = ['status', 'month', 'year']
    search_fields = ['email', 'full_name']
