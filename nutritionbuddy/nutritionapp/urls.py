from django.urls import path
from . import views


urlpatterns = [
    path('nutritionapp/', views.index, name='index'),
    path('searchrecipes/', views.search_recipes, name = "searchrecipes")
]