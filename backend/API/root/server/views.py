# -*- coding: UTF-8 -*-
from django.http import HttpResponse
from django.http import HttpRequest


def index(request):
    return HttpResponse("Hello World!")


def products(request, id):
    return HttpResponse(id)


def get_text(response):
    print("Я словил текст:", HttpRequest.path)
    return HttpResponse("Fuck you")


