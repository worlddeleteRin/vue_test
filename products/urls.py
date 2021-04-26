
from django.contrib import admin
from django.urls import path, include
from . import views
from django.urls import re_path

app_name = 'products'
urlpatterns = [
    path('', views.index, name = 'index'),
    re_path(r'^app/*', views.app_client, name = 'app_client'),
    path('<int:cat_id>', views.category, name = 'category'),
    path('<int:cat_id>/<int:dest_id>', views.destination, name = 'destination'),
    path('product/<int:product_id>', views.product, name = 'product'),
    path('stock/', views.stock, name = 'stock'),
    path('stock/<int:stock_id>', views.stock_item, name = 'stock_item'),
    path('callme_mail_ajax/', views.callme_mail_ajax, name = 'callme_mail_ajax'),
    # client api
    path('get_api/', views.get_api, name = 'get_api'),
    path('get_product_by_id_api/', views.get_product_by_id_api, name = 'get_product_by_id_api'),
]
