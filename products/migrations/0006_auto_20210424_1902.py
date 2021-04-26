# Generated by Django 3.0.7 on 2021-04-24 16:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_auto_20210424_1859'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productattribute',
            name='product',
        ),
        migrations.AddField(
            model_name='productattribute',
            name='product',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='attributes', to='products.Product'),
        ),
    ]
