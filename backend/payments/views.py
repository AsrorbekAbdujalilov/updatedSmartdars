from rest_framework import viewsets, permissions
from .models import PaymentRequest, CoinTransaction
from .serializers import PaymentRequestSerializer, CoinTransactionSerializer

class PaymentRequestViewSet(viewsets.ModelViewSet):
    queryset = PaymentRequest.objects.all()
    serializer_class = PaymentRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return PaymentRequest.objects.all()
        return PaymentRequest.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
