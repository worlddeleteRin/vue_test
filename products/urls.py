
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
    path('get_categories_api/', views.get_categories_api, name = 'get_categories_api'),
    path('get_api/', views.get_api, name = 'get_api'),
    path('get_product_by_id_api/', views.get_product_by_id_api, name = 'get_product_by_id_api'),
    # user 
    path('is_user_authorized_api/', views.is_user_authorized_api, name = 'is_user_authorized_api'),
    path('login_user_ajax/', views.login_user_ajax, name = 'login_user_ajax'),
    path('logout_user_ajax/', views.logout_user_ajax, name = 'logout_user_ajax'),
    path('get_user_data_ajax/', views.get_user_data_ajax, name = 'get_user_data_ajax'),
    path('submit_order_ajax/', views.submit_order_ajax, name = 'submit_order_ajax'),
    path('get_stocks_api/', views.get_stocks_api, name = 'get_stocks_api'),
]
