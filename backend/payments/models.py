from django.db import models
from django.conf import settings
import uuid

class PaymentRequest(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected')
    ]
    id = models.CharField(primary_key=True, max_length=50, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='payment_requests')
    paid_amount = models.IntegerField()
    base_coin = models.IntegerField(default=0)
    bonus_coin = models.IntegerField(default=0)
    total_coin = models.IntegerField()
    screenshot = models.ImageField(upload_to='payment_screenshots/', blank=True, null=True)
    payment_note = models.TextField(blank=True, default='')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    admin_note = models.TextField(blank=True, default='')
    package_id = models.CharField(max_length=100, blank=True, default='')
    payment_method = models.CharField(max_length=50, default='manual')
    created_at = models.DateTimeField(auto_now_add=True)
    approved_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Payment {self.id} from {self.user.email} ({self.status})"

class CoinTransaction(models.Model):
    id = models.CharField(primary_key=True, max_length=50, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='transactions')
    action_type = models.CharField(max_length=100) # registration_bonus, payment_approved, bsb_chsb_check, etc.
    coin_change = models.IntegerField()
    balance_after = models.IntegerField()
    note = models.TextField(blank=True, default='')
    ref_id = models.CharField(max_length=100, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.action_type} ({self.coin_change}) for {self.user.email}"
