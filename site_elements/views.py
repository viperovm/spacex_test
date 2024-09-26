from rest_framework import viewsets
from .models import MenuElement, AdvantagesElement
from .serializers import MenuSerializer, AdvantagesSerializer


class MenuViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MenuElement.objects.all()
    serializer_class = MenuSerializer


class AdvantagesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AdvantagesElement.objects.all()
    serializer_class = AdvantagesSerializer
