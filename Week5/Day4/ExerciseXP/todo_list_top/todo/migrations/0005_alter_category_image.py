# Generated by Django 4.2.1 on 2023-06-01 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0004_alter_todo_date_creation_alter_todo_deadline_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='image',
            field=models.URLField(blank=True, null=True),
        ),
    ]
