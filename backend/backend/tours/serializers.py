from rest_framework import serializers
from .models import Destination, Tour, ContactInquiry


class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'


class DestinationSerializer(serializers.ModelSerializer):
    tours = TourSerializer(many=True, read_only=True)

    class Meta:
        model = Destination
        fields = '__all__'


class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at']
        read_only_fields = ['created_at']
