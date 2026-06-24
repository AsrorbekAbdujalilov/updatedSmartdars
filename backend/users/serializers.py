from rest_framework import serializers
from .models import CoinUser

class CoinUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoinUser
        fields = [
            'id', 'email', 'full_name', 'coin_balance', 
            'referral_code', 'referred_by', 
            'referral_first_payment_reward_given', 
            'referral_disabled', 'is_staff', 'is_active', 'date_joined'
        ]
        read_only_fields = ['coin_balance', 'referral_first_payment_reward_given']
