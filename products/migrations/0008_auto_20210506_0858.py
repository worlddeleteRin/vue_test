# Generated by Django 3.0.7 on 2021-05-06 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_auto_20210424_1921'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='imgsrc',
            field=models.ImageField(blank=True, default='', null=True, upload_to='static/images/products'),
        ),
    ]