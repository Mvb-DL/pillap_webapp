from rest_framework import generics, permissions, status
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, ChangePasswordSerializer, NewsletterSerializer
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from django.core.mail import send_mail
from django.contrib.auth.tokens import PasswordResetTokenGenerator  
from django.contrib.sites.shortcuts import get_current_site  
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode  
from django.template.loader import render_to_string  
from .models import Newsletter
from django.contrib.auth.tokens import PasswordResetTokenGenerator
import six
from django.shortcuts import render
from django.utils.html import escape
import re

def validate_mail(email):
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
    if(re.fullmatch(regex, email)):
        return True

# Register API
class RegisterAPI(generics.GenericAPIView):

  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):

    serializer = self.get_serializer(data=request.data)
  
    serializer.is_valid(raise_exception=True)

    user = serializer.save()

    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })



# Login API
class LoginAPI(generics.GenericAPIView):

  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):

    serializer = self.get_serializer(data=request.data)

    serializer.is_valid(raise_exception=True)
    
    user = serializer.validated_data

    _, token = AuthToken.objects.create(user)

    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": token
    })


# Get User API
class UserAPI(generics.RetrieveAPIView):
  
  permission_classes = [
    permissions.IsAuthenticated,
  ]

  serializer_class = UserSerializer

  def get_object(self):
    return self.request.user



#What Kind of API???
@api_view(['POST'])
def update_user_data(request, *args, **kwargs):

    serializer_class = UserSerializer

    serializer = serializer_class(request.user, data=request.data, partial=True)

    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)



#Delets the user
@api_view(["DELETE", "POST", "GET"])
def delete_user_data(request, *args, **kwargs):

    event = request.user
    event.delete()
    
    return Response(status=status.HTTP_200_OK)



class ChangePasswordView(generics.UpdateAPIView):

    permission_classes = (IsAuthenticated,)

    serializer_class = ChangePasswordSerializer

    def update(self, request, *args, **kwargs):

      serializer = self.serializer_class(request.user, data=request.data)

      return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    


class AccountActivationTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, email, timestamp):
        return (
            six.text_type(email) + six.text_type(timestamp) 
        )

account_activation_token = AccountActivationTokenGenerator()


class NewsletterSignupView(generics.CreateAPIView):
    
    serializer_class = NewsletterSerializer
    
    def create(self, request, *args, **kwargs):
        
        data = request.data
        agree = escape(data["agree"])
        email = escape(data["email"])

        if validate_mail(email):

          data.update({'email': email})

          try:

            if agree:
            
              serializer = self.get_serializer(data=data)
              serializer.is_valid(raise_exception=True)
              self.perform_create(serializer)
              headers = self.get_success_headers(serializer.data)
              current_site = get_current_site(request)  

              mail_subject = 'Newsletter Pillap Bestätigungsmail'  

              html_message = render_to_string('confirmation_email.html',

                {   "name": email,
                    'domain': current_site.domain,
                    'uid': urlsafe_base64_encode(force_bytes(serializer.data["id"])),
                    'token': account_activation_token.make_token(email),
                })  

              send_mail(
                  subject=mail_subject, 
                  message="", 
                  recipient_list=[email,], 
                  from_email= "info@pillap.de", 
                  fail_silently=False,
                  html_message=html_message
                )

              return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

            else:

              return Response(status=status.HTTP_406_NOT_ACCEPTABLE)

          except:
             #meldung, dass mail bereits vorhanden!
             return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
          
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    def perform_create(self, serializer):
                      serializer.save()

#newsletter abmelden
def activate(request, uidb64, token):  
    
    uid = force_str(urlsafe_base64_decode(uidb64))  

    newsletter_account = Newsletter.objects.get(pk=uid)

    if str(newsletter_account.id) == str(uid) and account_activation_token.check_token(newsletter_account.email, token):

    #than save in database!!!
     newsletter_account.active = True
     newsletter_account.save()

     return render(request, 'activate_email.html')
    
    else:
        
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

