from django.test import TestCase
from rest_framework.test import APITestCase, APIClient
from marvel_heros.models import Hero

class MarvelTest(APITestCase):
    def check_marvel_api_response(self):
        client = APIClient()
        data = {'name':'DeadPool',
                'img_link':'test.img',
                'description':'description test'
                }
        url = 'api/hero'
        hero_response = self.client.post(url, data, format='json')
        self.assertEqual(hero_response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Hero.objects.count(), 1)
        self.assertEqual(Hero.objects.get().name, 'DeadPool')
        