from django.contrib import admin
from .models import CoinUser

@admin.register(CoinUser)
class CoinUserAdmin(admin.ModelAdmin):
    list_display = ['email', 'full_name', 'coin_balance', 'referral_code', 'created_at']
    search_fields = ['email', 'full_name']
    list_filter = ['created_at']
