from rest_framework import viewsets
from rest_framework import mixins
from .models import CustomUser
from .serializers import CustomUserModelSerializer


# Create your views here.


class CustomUserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                             viewsets.GenericViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserModelSerializer

