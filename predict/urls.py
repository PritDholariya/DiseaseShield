from django.urls import path
from predict import views

urlpatterns = [
    path('login/', views.login_view, name="login"),
    path('signup/', views.signup, name="signup"),
]
