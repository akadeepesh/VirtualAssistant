from rest_framework import serializers
from .models import AddName

class AddNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddName
        fields = ['username', 'phonenum']
