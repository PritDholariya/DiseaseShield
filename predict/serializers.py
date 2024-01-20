from rest_framework import serializers
from .models import *

class userSerializers(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields =  '__all__'

    def create(self, validated_data):
        user = UserDetails.objects.create_user(**validated_data)
        return user
