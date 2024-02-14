# views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework import status
from .serializers import userSerializers
from .models import UserDetails
from rest_framework_simplejwt.tokens import RefreshToken
from django.db.models import Q # for complex queries
from rest_framework.permissions import IsAuthenticated
from .ml_models.disease import *

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


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_user_profile(request):
    print(request.headers)
    print(request.headers.get('Authorization'))

    user = request.user  # Assuming you're using Django's built-in User model
    
    try:
        user_details = UserDetails.objects.get(username=user.username)
    except UserDetails.DoesNotExist:
        return Response({'error': 'User details not found.'}, status=404)

    # Serialize user details
    serializer = userSerializers(user_details)  # Fix the naming here
    serialized_data = serializer.data

    return Response(serialized_data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_info(request):
    user = request.user
    print("hello")
    user_data = {
        'username': user.username,
        'profile_image_url': user.profile.image.url if user.profile.image else None,
        # Add more user data fields as needed
    }
    serializer = userSerializers(user_data)  # Fix the naming here
    serialized_data = serializer.data

    return Response(serialized_data)



@api_view(['POST'])
@permission_classes([AllowAny])
def heart_attack(request):
    if request.method == 'POST':
        data = request.data.get("formData")
        input_data = {key: float(value) for key, value in data.items()}
        prediction = predict_heart_attack(input_data)
        print("back")
        print(prediction)
        # Return the prediction as a JSON response
        return Response({"status": "success", 'message': 'Prediction successful', 'prediction': prediction}, status=status.HTTP_200_OK)

    return Response({"status": "error", 'message': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def predict_disease(request):
    if request.method == 'POST':
        data = request.data.get("symptoms")
        # input_data = {key: (value) for key, value in data.items()}
        prediction = predict_from_symptoms(data)
        print(prediction)
        # Return the prediction as a JSON response
        return Response({"status": "success", 'message': 'Prediction successful', 'prediction': prediction}, status=status.HTTP_200_OK)

    return Response({"status": "error", 'message': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def diabetes(request):
    if request.method == 'POST':
        data = request.data.get("formData")
        input_data = [float(value) for value in data.values()]  # Convert dictionary values to list of floats
        prediction = predict_diabetes(input_data)  # Assuming predict_diabetes is your prediction function
        # Return the prediction as a JSON response
        return Response({"status": "success", 'message': 'Prediction successful', 'prediction': prediction}, status=status.HTTP_200_OK)

    return Response({"status": "error", 'message': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def parkinson(request):
    if request.method == 'POST':
        data = request.data.get("formData")
        input_data = [float(value) for value in data.values()]  # Convert dictionary values to list of floats
        prediction = predict_parkinson(input_data)  # Assuming predict_parkinson is your prediction function
        # Return the prediction as a JSON response
        return Response({"status": "success", 'message': 'Prediction successful', 'prediction': prediction}, status=status.HTTP_200_OK)

    return Response({"status": "error", 'message': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)
