from django.urls import path
from predict import views

urlpatterns = [
    path('user/', views.get_user_info, name='get_user_info'),
    path('profile/', views.get_user_profile, name='get_user_profile'),
    path('login/', views.login_view, name="login"),
    path('signup/', views.signup, name="signup"),

]
