from rest_framework.serializers import ModelSerializer

from users import serializers
from .models import Project, ToDo
# from users .serializers import CustomUserModelSerializer


class ProjectModelSerializer(ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(ModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'
