from django.db import models
from users.models import CoinUser

class Referral(models.Model):
    user = models.OneToOneField(CoinUser, on_delete=models.CASCADE)
    referrer = models.ForeignKey(CoinUser, related_name='referred_users', on_delete=models.SET_NULL, null=True)
    bonus_given = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email} referred by {self.referrer.email if self.referrer else 'None'}"
