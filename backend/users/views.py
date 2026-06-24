from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import CoinUser
from .serializers import CoinUserSerializer

class CoinUserViewSet(viewsets.ModelViewSet):
    queryset = CoinUser.objects.all()
    serializer_class = CoinUserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return CoinUser.objects.all()
        return CoinUser.objects.filter(id=self.request.user.id)

    @action(detail=False, methods=['get'])
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)
