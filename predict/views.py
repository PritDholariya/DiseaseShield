# views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
from .serializers import userSerializers
from .models import UserDetails
from rest_framework_simplejwt.tokens import RefreshToken
from django.db.models import Q # for complex queries

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
        profile_image = request.data.get('profileimage')

        user = UserDetails.objects.filter(Q(username=username) | Q(email=email)).first()
        if not user:
            user = UserDetails.objects.create(username=username, email=email)
        else:
            return Response({"status":"failed",'message': 'User with this username or email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        user.firstname = firstname
        user.lastname = lastname
        user.DOB = dob
        user.profile_image = profile_image
        user.password = password
        user.save()
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        user = userSerializers(user).data
        user.pop('password')
        return Response({"status":"success",'token':access_token,'userInfo':user,'message': 'Signup successful'}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

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
