from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DestinationViewSet, TourViewSet, ContactInquiryViewSet

router = DefaultRouter()
router.register(r'destinations', DestinationViewSet)
router.register(r'tours', TourViewSet)
router.register(r'inquiries', ContactInquiryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
