from rest_framework.serializers import ModelSerializer

from marvel.hero.models import Hero 

class Hero(ModelSerializer):
    class Meta:
        model = Hero
        fields = ('name', 'img_link', 'real_name')

