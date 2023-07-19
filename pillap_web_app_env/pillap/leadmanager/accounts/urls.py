from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI, update_user_data, delete_user_data, ChangePasswordView, NewsletterSignupView, activate  
from knox import views as knox_views

urlpatterns = [
  path('api/auth', include('knox.urls')),
  path('api/auth/register', RegisterAPI.as_view()),
  path('api/auth/login', LoginAPI.as_view()),
  path('api/auth/user', UserAPI.as_view()),
  path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
  path('api/auth/update_user_data', update_user_data),
  path('api/auth/delete_user_data', delete_user_data),
  path("api/auth/change_user_password", ChangePasswordView.as_view() ),
  path('api/auth/newsletter_signup', NewsletterSignupView.as_view()),
  path('activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/', activate, name='activate'),  
]