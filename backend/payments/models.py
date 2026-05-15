from django.db import models
from users.models import CoinUser

class PaymentRequest(models.Model):
    STATUS = [('pending','Pending'),('approved','Approved'),('rejected','Rejected')]
    id = models.CharField(primary_key=True, max_length=50)
    email = models.EmailField()
    amount_uzs = models.IntegerField()
    coins_requested = models.IntegerField()
    screenshot = models.ImageField(upload_to='payment_screenshots/')
    status = models.CharField(max_length=20, choices=STATUS, default='pending')
    admin_note = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment {self.id} from {self.email} ({self.status})"

class CoinTransaction(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    user = models.ForeignKey(CoinUser, on_delete=models.CASCADE)
    type = models.CharField(max_length=50)   # purchase, spend, admin_add, referral_bonus, etc.
    amount = models.IntegerField()
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.type} - {self.amount} by {self.user.email}"
