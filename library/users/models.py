from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class CustomUser(AbstractUser):
    email = models.EmailField(verbose_name='email address', unique=True)

    def __str__(self):
        return self.email
