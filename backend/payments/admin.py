from django.contrib import admin
from .models import PaymentRequest, CoinTransaction

@admin.register(PaymentRequest)
class PaymentRequestAdmin(admin.ModelAdmin):
    list_display = ['email', 'amount_uzs', 'coins_requested', 'status', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['email']

@admin.register(CoinTransaction)
class CoinTransactionAdmin(admin.ModelAdmin):
    list_display = ['user', 'type', 'amount', 'created_at']
    list_filter = ['type', 'created_at']
    search_fields = ['user__email']
