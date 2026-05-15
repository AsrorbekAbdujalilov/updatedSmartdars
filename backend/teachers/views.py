from rest_framework import serializers, viewsets
from .models import TopTeacherReward

class TopTeacherRewardSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopTeacherReward
        fields = '__all__'

class TopTeacherRewardViewSet(viewsets.ModelViewSet):
    queryset = TopTeacherReward.objects.all()
    serializer_class = TopTeacherRewardSerializer
