from rest_framework import viewsets, permissions
from .models import TopTeacherReward
from .serializers import TopTeacherRewardSerializer

class TopTeacherRewardViewSet(viewsets.ModelViewSet):
    queryset = TopTeacherReward.objects.all()
    serializer_class = TopTeacherRewardSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
