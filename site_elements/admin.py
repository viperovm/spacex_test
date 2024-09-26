from django.contrib import admin
from .models import MenuElement, AdvantagesElement
from adminsortable2.admin import SortableAdminMixin


class MenuElementAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['my_order', 'name', 'url']


class AdvantagesElementAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['my_order']


admin.site.register(MenuElement, MenuElementAdmin)
admin.site.register(AdvantagesElement, AdvantagesElementAdmin)

