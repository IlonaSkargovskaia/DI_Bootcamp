# Generated by Django 4.2.1 on 2023-06-07 23:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0013_producer_alter_film_category_alter_film_release_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='producers',
            field=models.ManyToManyField(blank=True, null=True, to='films.producer'),
        ),
        migrations.AlterField(
            model_name='film',
            name='release_date',
            field=models.DateField(default=datetime.datetime(2023, 6, 7, 23, 43, 59, 733834, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='review',
            name='review_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 6, 7, 23, 43, 59, 734951, tzinfo=datetime.timezone.utc)),
        ),
    ]
