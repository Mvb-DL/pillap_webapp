from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import ProductSerializer, CartSerializer, CategorySerializer, CartItemSerializer
from .models import Product, Cart, CartItem
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404


class createProductAPI(generics.CreateAPIView):

  serializer_class = ProductSerializer

  def create(self, request, *args, **kwargs):
    
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    self.perform_create(serializer)
    headers = self.get_success_headers(serializer.data)

    return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

  def perform_create(self, serializer):
      serializer.save()


class createCategoryAPI(generics.CreateAPIView):

  serializer_class = CategorySerializer

  def create(self, request, *args, **kwargs):
    
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    self.perform_create(serializer)
    headers = self.get_success_headers(serializer.data)

    return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

  def perform_create(self, serializer):
      serializer.save()



class viewProductAPI(generics.RetrieveAPIView):

  def get(self, *args, **kwargs):

    queryset = Product.objects.all()
    serializer = ProductSerializer(queryset, many=True)
    data = serializer.data

    return Response({
      "products": data
    })



class viewCartAPI(generics.RetrieveAPIView):

  def get(self, request, *args, **kwargs):

    queryset = Cart.objects.all()
    cart_items = CartItem.objects.all()

    serializer = CartSerializer(queryset, many=True)
    data = serializer.data

    serializer_cart_item = CartItemSerializer(cart_items, many=True)
    data_cart_item = serializer_cart_item.data

    id = 2

    for d in data_cart_item:  
        if d["cart"]["user"]["id"] == id:
          print(d["product"]["id"])


    return Response({
      "cart_items": data_cart_item
    })



# saveProductInCart API
class saveProductInCartAPI(generics.GenericAPIView):

  queryset = Cart.objects.all()
  serializer_class = CartSerializer

  def post(self, request, format=None):

    #get product to put it into cart
    product = get_object_or_404(Product, pk=request.data["product"]["id"])
    user = get_object_or_404(User, pk=request.data["user"])

    #add user to new Cart
    cart, created = Cart.objects.get_or_create(user=user)

    new_cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product, quantity=1)
    new_cart_item.save()

    #respond with cart items and show in cart
    return Response(status=status.HTTP_201_CREATED)

