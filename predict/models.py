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
    profile_image = models.BinaryField()

    def __str__(self):
        return self.username