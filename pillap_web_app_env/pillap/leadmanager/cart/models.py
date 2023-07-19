from django.db import models
import uuid
from django.contrib.auth.models import User

        
class Category(models.Model):
    category_id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True)
    title = models.CharField(max_length=128)
    slug = models.SlugField(default= None)
    featured_product = models.OneToOneField('Product', on_delete=models.CASCADE, blank=True, null=True, related_name='featured_product')
    icon = models.CharField(max_length=100, default=None, blank = True, null=True)

    def __str__(self):
        return self.title
    

class Product(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True)
    name = models.CharField(max_length=128, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=8, decimal_places=2, default=0, null=False)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True, related_name='products')
    slug = models.SlugField(default=None, blank=True, null=True)
    product_image_link = models.CharField(max_length=256, blank=True, null=True)
    model_link = models.CharField(max_length=256, blank=True, null=True)
    
    def __int__(self):
        return self.id


class Cart(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None, null=False, related_name='cart')

    def __int__(self):
        return self.id


class CartItem(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, unique=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=False, null=True, related_name='item')
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, blank=True, default=None, null=False, related_name='item')
    quantity = models.PositiveIntegerField(default=1, null=True, blank=True)

    def __int__(self):
        return self.id, self.product


class Order(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True, null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None, null=False, related_name='order')
    total = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)


class OrderItem(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True, null=False)
    order = models.ForeignKey(Order, related_name='order_item', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='order_item', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1, null=True, blank=True)
