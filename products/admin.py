from django.contrib import admin
from .models import * 

# Register your models here.

class ProductAttributeInline(admin.TabularInline):
    model = ProductAttribute
    fields = [
      ('base', 'internal_value'),
    ]

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductAttributeInline]

admin.site.register(Category)
admin.site.register(Product, ProductAdmin)
admin.site.register(AttributeBase)
admin.site.register(ProductAttribute)
admin.site.register(Stock)

