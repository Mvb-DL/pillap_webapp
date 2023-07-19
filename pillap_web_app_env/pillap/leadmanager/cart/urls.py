from django.urls import path
from .api import createProductAPI, saveProductInCartAPI, viewCartAPI, viewProductAPI, createCategoryAPI
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path("cart/add_product", createProductAPI.as_view()),
    path("cart/add_category", createCategoryAPI.as_view()),
    path("cart/display_product", viewProductAPI.as_view()),
    path("cart/display_cart", viewCartAPI.as_view()),
    path("cart/add_product_to_cart", saveProductInCartAPI.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])