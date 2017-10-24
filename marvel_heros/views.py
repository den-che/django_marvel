from django.shortcuts import render

from django.shortcuts import render_to_response
from rest_framework.viewsets import ModelViewSet

from django_marvel.serializers import HeroSerializator

class HeroViewSet(ModelViewSet):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer