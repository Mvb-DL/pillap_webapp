from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Newsletter
from django.utils.html import escape


# User Serializer
class UserSerializer(serializers.ModelSerializer):

  first_name = serializers.SerializerMethodField("get_first_name_from_user")
  last_name = serializers.SerializerMethodField("get_last_name_from_user")
  date_joined = serializers.SerializerMethodField("get_date_joined_from_user")
  is_superuser = serializers.SerializerMethodField("get_is_superuser_from_user")

  class Meta:

    model = User
    fields = ('id', 'username', 'email', "first_name", "last_name", "date_joined", "is_superuser")

  def get_date_joined_from_user(self, user):
    date_joined = user.date_joined
    return escape(date_joined)

  def get_is_superuser_from_user(self, user):
    is_superuser = user.is_superuser
    return escape(is_superuser)

  def get_first_name_from_user(self, user):
    first_name = user.first_name 
    return escape(first_name)

  def get_last_name_from_user(self, user):
    last_name = user.last_name 
    return escape(last_name)


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):

  class Meta:

    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data, **extra_fields):

    #extra_fields.setdefault('is_superuser', False)

    user = User.objects.create_user(escape(validated_data['username']), escape(validated_data['email']), escape(validated_data['password']))

    return user


# Login Serializer
class LoginSerializer(serializers.Serializer):
  
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):

    user = authenticate(**data)

    if user and user.is_active:
      return user

    raise serializers.ValidationError("Incorrect Credentials")



class ChangePasswordSerializer(serializers.ModelSerializer):
  
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('old_password', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password": "Old password is not correct"})
        return value

    def update(self, instance, validated_data):

        instance.set_password(validated_data['password'])
        instance.save()

        return instance


class NewsletterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Newsletter
        fields = '__all__'
    