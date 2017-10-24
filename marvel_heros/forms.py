from orders.models import Hero


class HeroForm(forms.ModelForm):
    class Meta:
        fields = ['name', 'img_link', 'real_name']
        model = Hero