from django.contrib import admin
from .models import Referral

@admin.register(Referral)
class ReferralAdmin(admin.ModelAdmin):
    list_display = ['user', 'referrer', 'bonus_given', 'is_active', 'created_at']
    list_filter = ['bonus_given', 'is_active', 'created_at']
    search_fields = ['user__email', 'referrer__email']
