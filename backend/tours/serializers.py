from rest_framework import serializers
from .models import Destination, Tour, ContactInquiry

class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = '__all__'

class TourSerializer(serializers.ModelSerializer):
    # This nesting shows the destination name instead of just an ID
    destination_name = serializers.ReadOnlyField(source='destination.name')

    class Meta:
        model = Tour
        fields = ['id', 'title', 'destination', 'destination_name', 'price_kes', 'duration', 'image', 'is_featured']

class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = '__all__'