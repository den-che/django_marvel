from django.shortcuts import render

from django.shortcuts import render_to_response
from rest_framework.viewsets import ModelViewSet

from django_marvel.serializers import HeroSerializator

def index(request):
    form = HeroForm()
    heros = Hero.object.all()
    return render_to_response('index.html',{'heros': heros, 'form': form}) 