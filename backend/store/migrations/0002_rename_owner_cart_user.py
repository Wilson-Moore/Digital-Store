# Generated by Django 5.1.4 on 2025-01-03 22:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cart',
            old_name='owner',
            new_name='user',
        ),
    ]
