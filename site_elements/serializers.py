from rest_framework import serializers
from .models import MenuElement, AdvantagesElement


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuElement
        fields = '__all__'


class AdvantagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvantagesElement
        fields = '__all__'
