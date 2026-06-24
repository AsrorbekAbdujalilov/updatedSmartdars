from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .services import apply_referral

class ReferralViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=['post'])
    def apply(self, request):
        code = request.data.get('referral_code')
        result = apply_referral(request.user.email, code)
        if result['ok']:
            return Response(result)
        return Response(result, status=status.HTTP_400_BAD_REQUEST)
