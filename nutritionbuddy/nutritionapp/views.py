from django.shortcuts import render
from django.http import HttpResponse
from .services import get_recipes
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.

def index(request):
    return render(request, 'nutritionbuddy/index.html')

@csrf_exempt
def search_recipes(request):
    
    data = get_recipes(json.loads(request.body))

    if data:
        print(data)
        return JsonResponse(data)
    else:
        return JsonResponse({"Error" : "Error with api"})

