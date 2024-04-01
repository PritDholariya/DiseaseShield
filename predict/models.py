from django.db import models
from django.contrib.auth.models import User

class UserDetails(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255,unique=True)
    age = models.IntegerField(blank=True,null=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    DOB = models.DateField(blank=True,null=True)
    email = models.CharField(max_length=50,unique=True)
    password = models.CharField(max_length=17)
    profile_image = models.TextField()

    def __str__(self):
        return self.username

class UserHistory(models.Model):
    # user = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
    user = models.CharField(max_length =255)
    prediction_type = models.CharField(max_length=200,blank=True, null=True)
    symptoms = models.CharField(max_length=255, blank=True, null=True)
    disease = models.CharField(max_length=100, blank=True, null=True)
    prediction_result = models.CharField(max_length=100, blank=True, null=True)
    prediction_percentage = models.FloatField(blank=True, null=True)  # Change to FloatField
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user
    