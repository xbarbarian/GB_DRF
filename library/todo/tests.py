import random

from django.test import TestCase

from rest_framework import status
from rest_framework.test import APIRequestFactory

from .views import ToDoModelViewSet, ProjectModelViewSet


class TestTodoViewSet(TestCase):

    def email_test(self):
        chache = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] * 100
        random.shuffle(chache)
        buf = ""
        for i in range(0, 10):
            buf += str(chache.pop())
        return "Andrey" + buf + "@bk.ru"

    # APIRequestFactory
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/user/')
        view = ToDoModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestProjectViewSet(TestCase):
    # APIRequestFactory
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/user/')
        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
