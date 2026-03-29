from django.db import models

class Destination(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='destinations/')
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Tour(models.Model):
    title = models.CharField(max_length=200)
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, related_name='tours')
    price_kes = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.CharField(max_length=50, help_exe="e.g. 3 Days, 2 Nights")
    image = models.ImageField(upload_to='tours/')
    is_featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class ContactInquiry(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Inquiry from {self.name}"