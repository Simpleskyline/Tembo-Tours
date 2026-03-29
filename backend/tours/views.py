from rest_framework import viewsets
from .models import Destination, Tour, ContactInquiry
from .serializers import DestinationSerializer, TourSerializer, ContactInquirySerializer

class DestinationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

class TourViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer

class ContactInquiryViewSet(viewsets.ModelViewSet):
    queryset = ContactInquiry.objects.all()
    serializer_class = ContactInquirySerializer