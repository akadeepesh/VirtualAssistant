from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class AddName(models.Model):
    username = models.CharField(max_length=30, null=False, blank=False, unique=True)
    phonenum = PhoneNumberField(null=False, blank=False)


# Create your models here.
