from django.contrib import admin
from django.urls import path
#from .views import get_text
from .views import products
urlpatterns = [
    path('query/<str:id>', products),
]

