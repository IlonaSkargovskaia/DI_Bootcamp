# Generated by Django 4.2.1 on 2023-06-02 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rent', '0005_alter_rentalrate_daily_rate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='email',
            field=models.EmailField(default='test@gmail.com', max_length=254, unique=True),
        ),
    ]
