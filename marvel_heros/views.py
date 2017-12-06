from django.shortcuts import render

from django.shortcuts import render_to_response
from rest_framework.viewsets import ModelViewSet
from marvel_heros.models import Hero

from marvel_heros.serializers import HeroSerializer

def get_hero(request):
    heros = Hero.objects.all()
    print(heros)
    return render_to_response('marvel_heros.html',{'heros': heros})

def insert_hero(request):
	hero_name = request.GET['data']['results'][0]['name']
	hero_img_link = request.GET['data']['results'][0]['thumbnail']['path']+'.'+marvel_hero['data']['results'][0]['thumbnail']['extension']
	hero_description = request.GET['data']['results'][0]['description']
	hero = Hero(name = hero_name, img_link = hero_img_link, description = hero_description)
	hero.save()

class HeroViewSet(ModelViewSet):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer