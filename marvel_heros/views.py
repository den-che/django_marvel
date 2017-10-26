from django.shortcuts import render

from django.shortcuts import render_to_response
from rest_framework.viewsets import ModelViewSet
from marvel_heros.models import Hero

from marvel_heros.serializers import HeroSerializer

def get_hero(request):
    heros = Hero.objects.all()
    return render_to_response('marvel_heros.html',{'heros': heros})

class HeroViewSet(ModelViewSet):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer