from django.db import models


class MenuElement(models.Model):
    name = models.CharField(max_length=20, verbose_name='Название пункта меню', blank=False, null=False)
    url = models.CharField(max_length=100, verbose_name='url', blank=False, null=False)
    my_order = models.PositiveIntegerField(verbose_name='Сорт.', default=0, blank=False, null=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Пункт меню'
        verbose_name_plural = 'Пункты меню'
        ordering = ['my_order']


class AdvantagesElement(models.Model):
    top = models.CharField(max_length=15, verbose_name='Верхняя надпись', blank=False, null=False)
    middle = models.CharField(max_length=5, verbose_name='Средняя надпись', blank=False, null=False)
    bottom = models.CharField(max_length=15, verbose_name='Нижняя надпись', blank=False, null=False)
    my_order = models.PositiveIntegerField(verbose_name='Сорт.', default=0, blank=False, null=False)

    def __str__(self):
        return f'{self.top} {self.bottom}'

    class Meta:
        verbose_name = 'Пункт преимуществ'
        verbose_name_plural = 'Пункты преимуществ'
        ordering = ['my_order']
