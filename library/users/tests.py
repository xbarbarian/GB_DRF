import random

from django.test import TestCase
from rest_framework import status
from rest_framework.test import APITestCase, APIClient, APIRequestFactory, force_authenticate

from .models import CustomUser
from .views import CustomUserModelViewSet


class TestUserViewSet(TestCase):
    # APIRequestFactory
    def email_test(self):
        chache = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] * 100
        random.shuffle(chache)
        buf = ""
        for i in range(0, 10):
            buf += str(chache.pop())
        return "Andry" + buf + "@bk.ru"

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/user/')
        view = CustomUserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user_factory(self):
        factory = APIRequestFactory()
        request = factory.post('/api/user/', {'username': 'Иванов', 'first_name': 'Иван', 'last_name': 'Иванович',
                                              'email': self.email_test()}, format='json')
        view = CustomUserModelViewSet.as_view({'post': 'create'})
        admin = CustomUser.objects.create_superuser('admin', 'admin@admin.ru', '1')
        force_authenticate(request, admin)
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_detail(self):
        user = CustomUser.objects.create(username='test', email=self.email_test())
        client = APIClient()
        response = client.get(f'/api/user/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user_client(self):
        CustomUser.objects.create_superuser('admin', 'admin@admin.ru', '1')
        client = APIClient()
        client.login(useradmin='admin', password='1')
        response = client.post('/api/user/', {'username': 'Александр', 'first_name': 'Сергеевич', 'last_name': 'Пушкин',
                                              'email': self.email_test()})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class TestUserAPIViewSet(APITestCase):

    def email_test(self):
        chache = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] * 100
        random.shuffle(chache)
        buf = ""
        for i in range(0, 10):
            buf += str(chache.pop())
        return "Nikolay" + buf + "@mail.com"

    def test_create_user_client(self):
        CustomUser.objects.create_superuser('admin', 'admin@admin.ru', '1')
        self.client.login(useradmin='admin', password='1')
        response = self.client.post('/api/user/',
                                    {'username': 'Александр', 'first_name': 'Сергеевич', 'last_name': 'Пушкин',
                                     'email': self.email_test()})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
