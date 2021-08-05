from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from .models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer


# Create your views here.
class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ToDotLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_fields = ['name']


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDotLimitOffsetPagination
    filterset_fields = ['project', 'create_at', 'update_at']

    def destroy(self, request, *args, **kwargs):
        todo = ToDo.objects.get(id=int(self.kwargs['pk']))
        todo.is_active = False
        todo.save()
        serializer = ToDoModelSerializer(todo)
        return Response(serializer.data)
