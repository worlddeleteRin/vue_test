
from django.shortcuts import render
from .models import * 
from django.http import JsonResponse, HttpResponse
import urllib
import os
import json
from django.core.files.storage import default_storage
from food_fabrik.settings import * 
from cart.models import * 

from django.core.mail import send_mail
from django.core import serializers
from django.conf import settings


# Create your views here.

def get_session_key(request):
    if not request.session.session_key:
        request.session.create()
    return request.session.session_key  

def get_or_create_cart(request):
    session_key = get_session_key(request)
    current_cart = Cart.objects.get_or_create(
        session_key = session_key,
    )[0],
    return current_cart[0]

def app_client(request):
    template = 'products/index.html'
    context = {}
    return render(request, template, context)

def index(request):
    cart = get_or_create_cart(request)
    session_key = get_session_key(request)
    categories = Category.objects.all().order_by('display_priority')
    # destinations = Destination.objects.all()
    products = Product.objects.all()
    sale_products = Product.objects.filter(
        sale_price__gte = 1
    )
    # return HttpResponse('главная страница, рендер с сервера')
    return render(request, 'products/index.html', {
        'categories': categories,
        'products': products,
        'session_key': session_key,
        'cart': cart,
        'sale_products': sale_products,
        # 'destinations': destinations,
    })
def product(request, product_id):
    cart = get_or_create_cart(request)
    session_key = get_session_key(request)
    current_product = Product.objects.get(id = product_id)
    return render(request, 'products/product.html', {
        'product': current_product,
        'cart': cart,
        'session_key': session_key,
    })



def destination(request, cat_id, dest_id):
    session_key = get_session_key(request)
    current_cat = Category.objects.get(
        id = cat_id,
    )
    current_dest = Destination.objects.get(
        category = current_cat,
        id = dest_id,
    )
    products = current_dest.product_set.all()
    return render(request, 'products/dest.html', {
        'current_cat': current_cat,
        # 'current_dest': current_dest,
        'products': products,
    })

def category(request, cat_id):
    session_key = get_session_key(request)
    
    current_cat = Category.objects.get(
        id = cat_id,
    )
    
    products = Product.objects.filter(
        category = current_cat,
    )
    return render(request, 'products/category.html', {
        'current_cat': current_cat,
        # 'current_dest': current_dest,
        'products': products,
    })

def stock(request):
    session_key = get_session_key(request)
    cart = get_or_create_cart(request)
    stocks = Stock.objects.all().order_by('-display_priority')
    return render(request, 'products/stock.html', {
        'cart': cart,
        'stocks': stocks,
    })
def stock_item(request, stock_id):
    session_key = get_session_key(request)
    cart = get_or_create_cart(request)
    current_stock = Stock.objects.get(
        id = stock_id
    )
    print('stock id is :', current_stock.id)
    return render(request, 'products/stock_item.html', {
        'cart': cart,
        'stock': current_stock,
    })

def callme_mail_ajax(request):
    user_phone = request.GET['phone']
    print('user phone is: ', user_phone)

    try:
        send_mail(
            'Заявка на обратный звонок!',
            'Номер телефона: {} '.format(user_phone),
            settings.EMAIL_HOST_USER,
            [
            # 'worlddelete0@mail.ru', 
            # 'fudfabrik@gmail.com',
            # '161085ap@mail.ru',
            # 'worlddelete0@yandex.ru',
            ],
            # 'fudfabrik@gmail.com'
            )
        print('email is sent')
    except:
        pass
    
    return JsonResponse({
        'complete': True,
    }, status = 200)


def get_categories_api(request):
    categories = Category.objects.all().order_by('display_priority')
    categories = list(categories.values())
    return JsonResponse({
        'categories': categories,
    }, status = 200)
def get_api(request):
    products = Product.objects.all()
    response_products = []
    for product in products:
        response_product = get_product_serialize(product)
        response_products.append(response_product)
        print('response products are  \ n \n \n \n', response_products[0])
    return JsonResponse({
        'products': response_products,
    }, status = 200)
def get_product_by_id_api(request):
    # try:
    product_id = request.GET['product_id']
    product = Product.objects.get(
        id = product_id
    )
    response_product = get_product_serialize(product)
    # list(product[0].variants.all().order_by('price').values())
    print('product is', product)
    return JsonResponse({
        'status': True,
        'product': response_product,
    }, status = 200)

def get_product_serialize(product):
    response_product = serializers.serialize('python', [product])[0]['fields']
    response_product['id'] = product.id
    response_product['variations'] = []
    for variant in product.variants.all().order_by('price'):
        result_variant = serialize_product(variant)
        # result_variant = serializers.serialize('python', [variant])[0]['fields']
        result_variant['attributes'] = {}
        for variant_attribute in variant.attributes.all():
            result_variant['attributes'][variant_attribute.base.label] = {
                        'value': variant_attribute.internal_value,
                        'lvl': variant_attribute.base.lvl
                    }
        response_product['variations'].append(result_variant)
    return response_product
 
def serialize_product(product):
        obj = {
        'id': product.id, 
        'has_parent': product.check_has_parent(),
        'name': product.name, 
        'product_type': product.product_type,
        'category': product.category.id,
        'price': product.price,
        'sale_price': product.sale_price,
        'ves': product.ves,
        'description': product.description,
        'imgsrc': product.imgsrc.url,
        'display_priority': product.display_priority,
        }
        return obj

   # except:
    #     return JsonResponse({
    #         'status': False,
    #     }, status = 200)
# def get_product_by_id_api(request):
#     # try:
#     product_id = request.GET['product_id']
#     current_product = Product.objects.filter(
#         id = product_id
#     )
    # def serializable_object(product):
    #     "Recurse into tree to build a serializable object"
    #     obj = {
    #     'id': product.id, 
    #     'has_parent': product.check_has_parent(),
    #     'name': product.name, 
    #     'product_type': product.product_type,
    #     'category': product.category,
    #     'price': product.price,
    #     'sale_price': product.sale_price,
    #     'ves': product.ves,
    #     'description': product.description,
    #     'imgsrc': product.imgsrc.url,
    #     'display_priority': product.display_priority,
    #     'attributes': {},
    #     'variations': []}
    #     for variant_attribute in product.attributes.all():
    #         obj['attributes'][variant_attribute.base.label] = {
    #                     'value': variant_attribute.internal_value,
    #                     'lvl': variant_attribute.base.lvl
    #                 }
    #     for child in product.get_children():
    #         obj['variations'].append(serializable_object(child))
    #     return obj
    # response_product = serializable_object(current_product[0])
    # # response_product = json.dumps(response_product)
    # print('response product is', response_product)

    # return JsonResponse({
    #     'status': True,
    #     'product': response_product,
    # }, status = 200)
# #     # except:
# #     #     return JsonResponse({
# #     #         'status': False,
# #     #     }, status = 200)
