from rest_framework import serializers
from .models import PaymentRequest, CoinTransaction

class PaymentRequestSerializer(serializers.ModelSerializer):
    user_email = serializers.ReadOnlyField(source='user.email')

    class Meta:
        model = PaymentRequest
        fields = '__all__'
        read_only_fields = ['id', 'user', 'base_coin', 'bonus_coin', 'total_coin', 'status', 'admin_note', 'created_at', 'approved_at']

class CoinTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoinTransaction
        fields = '__all__'
