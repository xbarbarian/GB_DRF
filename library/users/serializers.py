from rest_framework.serializers import ModelSerializer
from .models import CustomUser


class CustomUserModelSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'first_name', 'last_name')
        # extra_kwargs = {'username': {'write_only': True},
        #                 'email': {'write_only': True},
        #                 'first_name': {'write_only': True},
        #                 'last_name': {'write_only': True}
        #                 }
