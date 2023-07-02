from django.shortcuts import render
from django.http import HttpResponse
from .services import get_recipes
from django.http import JsonResponse

# Create your views here.

def index(request):
    return render(request, 'nutritionbuddy/index.html')


def search_recipes(request, body):
    data = get_recipes(body)
    print(data)
    if data:
        return JsonResponse(data)
    else:
        return HttpResponse("Error with api")

