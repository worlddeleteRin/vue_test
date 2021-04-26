from django.db import models
from mptt.models import MPTTModel, TreeForeignKey

# Create your models here.


class Category(models.Model):
    slug = models.CharField(default = '', max_length = 300)
    name = models.CharField(default = '', max_length = 300)
    imgsrc = models.ImageField(upload_to="static/images/products", default = '')
    display_priority = models.IntegerField(default = 0,)
    def __str__(self):
        return self.name


VARIATION_PRODUCT_TYPE = [
    ('single', 'single'),
    ('variative', 'variative'),
]
VARIATION_TESTO = [
    ('traditional', 'Традиционное'),
    ('tonkoe', 'Тонкое')
]
VARIATION_SIZE = [
    ('Маленькая (25 см)', 'small'),
    ('Средняя (30 см)', 'medium'),
    ('Большая (35 см)', 'large'),
]

class AttributeBase(models.Model):
    label = models.CharField(max_length = 200, default = None)
    lvl = models.PositiveIntegerField(default = 1)
    def __str__(self):
        return self.label

class Attribute(models.Model):
    base = models.ForeignKey(AttributeBase, related_name = 'attributes',
    on_delete = models.CASCADE,)
    internal_value = models.CharField(max_length = 200, default = None,)
    # def __str__(self):
    #     str(self.internal_value)

class Product(models.Model):
    parent = models.ForeignKey('self', related_name='variants', on_delete=models.CASCADE,
    blank = True, null = True)
    product_type = models.CharField(max_length = 50, choices = VARIATION_PRODUCT_TYPE, default='single')
    category = models.ForeignKey(Category,on_delete=models.CASCADE, default = None,
    null = True, blank = True)

    name = models.CharField(default = '', max_length = 300)
    price = models.IntegerField(default = 0)
    sale_price = models.IntegerField(default = 0,)
    ves = models.CharField(default = '', max_length = 300, 
    blank = True, null = True)
    description = models.CharField(default = '', max_length = 2000,
    blank = True, null = True)
    # imgsrc = models.ImageField(upload_to='static/images', blank = True, null = True)
    imgsrc = models.ImageField(upload_to="static/images/products", default = '',
    blank = True, null = True)
    display_priority = models.IntegerField(default = 0)
    def __str__(self):
        return self.name + ' ' + str(self.get_price()) + ' ₽'
    def check_has_parent(self):
        if self.parent:
            return True
        else:
            return False

    def get_price(self):
        if self.sale_price > 0:
            return self.sale_price
        else:
            return self.price
    def discount_perc(self):
        return int(((self.price - self.sale_price) / self.price) * 100)
    def discount_val(self):
        return int(self.price - self.sale_price)
    def has_sale(self):
        if self.sale_price > 0:
            return True
        else:
            return False

class ProductAttribute(Attribute):
    product = models.ForeignKey(Product, default = None, related_name = 'attributes',
    on_delete = models.CASCADE)
    def __str__(self):
        return self.base.label + ": " + self.internal_value
    


# class Attribute(models.Model):
#     name = models.CharField(default = '', max_length = 300) 
#     category = models.ForeignKey(Category,
#     on_delete=models.CASCADE, default = None,)
#     product = models.ForeignKey(Product,
#         on_delete=models.CASCADE, default = None,
#     )
    # def __str__(self):
    #     return self.name 

# class Attributeitem(models.Model):
#     name = models.CharField(default = '', max_length = 300)
#     attr = models.ForeignKey(
#         Attribute, on_delete=models.CASCADE,
#     )
#     def __str__(self):
#         return self.name 

class Stock(models.Model):
    name = models.CharField(default = '', max_length = 300)
    description = models.CharField(default = '', max_length = 2000)
    imgsrc = models.ImageField(upload_to="static/images/products")
    display_priority = models.IntegerField(default = 0,)

    def __str__(self):
        return self.name

def deleteall():
    pr = Product.objects.all()
    # dest = Destination.objects.all()
    ct = Category.objects.all()
    # st = Stock.objects.all()
    # st.delete()
    ct.delete()
    # dest.delete()
    pr.delete()

    print('all is deleted')