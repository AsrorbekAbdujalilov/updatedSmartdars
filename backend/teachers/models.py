from django.db import models

class TopTeacherReward(models.Model):
    STATUS = [('pending','Pending'),('approved','Approved'),('rejected','Rejected')]
    email = models.EmailField()
    full_name = models.CharField(max_length=255)
    screenshot = models.ImageField(upload_to='teacher_screenshots/')
    coins_amount = models.IntegerField(default=0)
    status = models.CharField(max_length=20, choices=STATUS, default='pending')
    month = models.IntegerField(null=True)
    year = models.IntegerField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
