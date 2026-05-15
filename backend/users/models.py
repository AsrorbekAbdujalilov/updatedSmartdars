from django.db import models

class CoinUser(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255, default='')
    coin_balance = models.IntegerField(default=0)
    referral_code = models.CharField(max_length=10, unique=True)
    referred_by = models.CharField(max_length=10, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.email} - {self.coin_balance} coins"
