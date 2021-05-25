from django.db import models
from users.models import CustomUser
from datetime import datetime
# Create your models here.


class Project(models.Model):
    name = models.CharField(max_length=256)
    link_to_repo = models.URLField(max_length=256, blank=True)
    users_list = models.ManyToManyField(CustomUser, on_delete=models.PROTECT)

    def __str__(self):
        return self.name


class Todo(models.Model):
    project_name = models.CharField(max_length=256)
    note = models.CharField(max_length=256)
    note_text = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    update_at = models.DateTimeField(auto_now=True, editable=False)
    users = models.ManyToManyField(CustomUser, on_delete=models.PROTECT)
    status = models.BooleanField(default=True)
