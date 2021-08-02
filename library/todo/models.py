from django.db import models
from users.models import CustomUser


# Create your models here.

class Project(models.Model):
    class Meta:
        verbose_name = 'Проект'

    name = models.CharField(max_length=128, verbose_name='Название проекта')
    url = models.URLField(max_length=200, blank=True, verbose_name='Git URL')
    users_list = models.ManyToManyField(CustomUser, related_name='users_project')


class ToDo(models.Model):
    class Meta:
        verbose_name = 'Заметка'

    project = models.ForeignKey(Project, on_delete=models.PROTECT)
    text = models.TextField(default='')
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
