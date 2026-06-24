from rest_framework import serializers
from .models import TopTeacherReward

class TopTeacherRewardSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopTeacherReward
        fields = '__all__'
