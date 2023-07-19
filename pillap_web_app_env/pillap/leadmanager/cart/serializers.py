from rest_framework import serializers
from  .models import *
from accounts.serializers import UserSerializer


class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = '__all__'



class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)
    item = serializers.StringRelatedField(many=True)
    
    class Meta:
        model = Cart
        fields = ('id', 'user', "item")

        

class CartItemSerializer(serializers.ModelSerializer):

    product = ProductSerializer(read_only=True)
    cart = CartSerializer(read_only=True)

    class Meta:
        model= CartItem
        fields = ('id', "product", "cart", "quantity")

        
    
class OrderSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)
    order_item = serializers.StringRelatedField(many=True, required=False)

    class Meta:
        model = Order
        fields = ("id", 'user', 'order_item')

    def create(self, validated_data):
        order = Order.objects.create(**validated_data)
        return order       



class OrderItemSerializer(serializers.ModelSerializer):

    order = OrderSerializer(read_only=True)
    product = ProductSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ('id', 'order', 'product', "quantity")



