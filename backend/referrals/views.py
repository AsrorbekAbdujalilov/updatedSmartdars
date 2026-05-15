from rest_framework import serializers, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Referral

class ReferralSerializer(serializers.ModelSerializer):
    class Meta:
        model = Referral
        fields = '__all__'

class ReferralViewSet(viewsets.ModelViewSet):
    queryset = Referral.objects.all()
    serializer_class = ReferralSerializer

    @action(detail=False, methods=['post'])
    def apply(self, request):
        return Response({"message": "Referral applied"})

    @action(detail=False, methods=['get'], url_path='my-stats')
    def my_stats(self, request):
        return Response({"stats": {}})

    @action(detail=False, methods=['get'], url_path='my-invited')
    def my_invited(self, request):
        return Response([])

    @action(detail=False, methods=['get'], url_path='latest-bonus')
    def latest_bonus(self, request):
        return Response({})

