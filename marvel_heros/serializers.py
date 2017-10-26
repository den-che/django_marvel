from rest_framework.serializers import ModelSerializer

from marvel_heros.models import Hero 

class HeroSerializer(ModelSerializer):
    class Meta:
        model = Hero
        fields = ('name', 'img_link', 'real_name')

