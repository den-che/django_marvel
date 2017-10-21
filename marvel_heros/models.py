from django.db import models


# Create your models here.
class Hero(models.Model):
    name = models.CharField(max_length = 30)
    img_link = models.CharField(max_length = 200)
    real_name = models.CharField(max_length = 100)