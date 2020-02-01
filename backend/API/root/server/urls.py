from django.contrib import admin
from django.urls import path
from .views import index, get_text, products
urlpatterns = [
    path('test/', index),
    path('query/<str:id>', products),
]

