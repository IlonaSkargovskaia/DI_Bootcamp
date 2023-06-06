# Generated by Django 4.2.1 on 2023-06-06 17:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0009_poster_alter_film_release_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='release_date',
            field=models.DateField(default=datetime.datetime(2023, 6, 6, 17, 52, 52, 747011, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='poster',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images'),
        ),
        migrations.AlterField(
            model_name='review',
            name='review_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 6, 6, 17, 52, 52, 748011, tzinfo=datetime.timezone.utc)),
        ),
    ]