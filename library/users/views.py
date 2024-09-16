from rest_framework import viewsets
from rest_framework import mixins
from .models import CustomUser
from .serializers import CustomUserModelSerializer, CustomUserModelSerializerV2


# Create your views here.


class CustomUserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                             viewsets.GenericViewSet):
    queryset = CustomUser.objects.all()
    # serializer_class = CustomUserModelSerializer

    def get_serializer_class(self):
        if self.request.version == 'v2':
            return CustomUserModelSerializerV2
        return CustomUserModelSerializer
