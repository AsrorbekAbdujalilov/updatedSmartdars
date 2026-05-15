from rest_framework import serializers, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import CoinUser

class CoinUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoinUser
        fields = '__all__'

class CoinUserViewSet(viewsets.ModelViewSet):
    queryset = CoinUser.objects.all()
    serializer_class = CoinUserSerializer

    @action(detail=False, methods=['get'])
    def me(self, request):
        # Placeholder for returning current logged-in user details
        return Response({"message": "Current user details"})

    @action(detail=False, methods=['get'], url_path='me/coin-balance')
    def coin_balance(self, request):
        return Response({"coin_balance": 0})

    @action(detail=False, methods=['get'], url_path='me/coin-history')
    def coin_history(self, request):
        return Response([])
