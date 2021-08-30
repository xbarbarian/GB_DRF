from django.db import models
from django.db.models import fields
import graphene
from graphene_django import DjangoObjectType
from todo.models import Project, ToDo
from users.models import CustomUser


class TodoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class CustomUserType(DjangoObjectType):
    class Meta:
        model = CustomUser
        fields = '__all__'


class Query(graphene.ObjectType):
    all_todo = graphene.List(TodoType)
    all_users = graphene.List(CustomUserType)
    all_projects = graphene.List(ProjectType)

    def resolve_all_todo(root, info):
        return ToDo.objects.all()

    def resolve_all_users(root, info):
        return CustomUser.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()


schema = graphene.Schema(query=Query)
