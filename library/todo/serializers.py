from rest_framework.serializers import ModelSerializer
from users import serializers
from .models import Project, ToDo
from users.models import CustomUser
from drf_writable_nested import WritableNestedModelSerializer

from users.serializers import CustomUserModelSerializer


class UsersListSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username',)
        # fields = '__all__'


class ProjectNameSerializer(ModelSerializer):
    class Meta:
        model = Project
        # fields = ('name',)


class ProjectModelSerializer(WritableNestedModelSerializer, ModelSerializer):
    # users_list = UsersListSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(WritableNestedModelSerializer, ModelSerializer):
    # project = ProjectNameSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'
