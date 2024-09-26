from rest_framework.routers import DefaultRouter
from .views import MenuViewSet, AdvantagesViewSet


router = DefaultRouter()
router.register(r'menu', MenuViewSet, basename='menu')
router.register(r'advantages', AdvantagesViewSet, basename='advantages')

urlpatterns = []

urlpatterns += router.urls
