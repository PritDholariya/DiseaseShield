# views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
# from django.contrib.auth import authenticate, login
# from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from rest_framework import status
from .serializers import userSerializers
from .models import UserDetails
from rest_framework_simplejwt.tokens import RefreshToken
import base64

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    if request.method == 'POST':
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        firstname = request.data.get('firstname')
        lastname = request.data.get('lastname')
        dob = request.data.get('dob')
        profile_image = request.data.get('profile_image')

        print(username,email,password,firstname, lastname, dob, profile_image)
        # if not username or not password or not email:
        #     return Response({"status":"failed",'message': 'All username, email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

        # user, created = UserDetails.objects.get_or_create(username=username, password=password, email=email, firstname=firstname, lastname=lastname, dob=dob)
        # if not created:
        #     return Response({"status":"failed",'message': 'User with this username or email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        # user.profile_image = base64.b64encode(profile_image)
        # user.save()
        # refresh = RefreshToken.for_user(user)
        # access_token = str(refresh.access_token)
        # user = userSerializers(user).data
        # user.pop('password')
        return Response({"status":"success", 'message': 'Signup successful'}, status=status.HTTP_201_CREATED)
        # serializer = userSerializers(data=request.data)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        # user = authenticate(request, username=username, password=password)

        if not username or not password:
            return Response({"status":"failed",'message': 'Both username and password are required'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = UserDetails.objects.get(username=username)
        except UserDetails.DoesNotExist:
            return Response({"status":"failed",'message': 'User not registered'}, status=status.HTTP_400_BAD_REQUEST)

        if user.password == password:
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            user = userSerializers(user).data
            user.pop('password')
            return Response({"status":"success",'token': access_token, 'userInfo':user,'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({"status":"failed",'message': 'Password is Incorrect.'}, status=status.HTTP_400_BAD_REQUEST)
