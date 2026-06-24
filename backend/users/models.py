from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
import uuid

class CoinUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        if password:
            user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class CoinUser(AbstractUser):
    # Use email for login
    username = None 
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255, default='')
    coin_balance = models.IntegerField(default=0)
    referral_code = models.CharField(max_length=10, unique=True, blank=True)
    referred_by = models.CharField(max_length=10, null=True, blank=True)
    referral_first_payment_reward_given = models.BooleanField(default=False)
    referral_disabled = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CoinUserManager()

    def __str__(self):
        return f"{self.email} - {self.coin_balance} coins"
