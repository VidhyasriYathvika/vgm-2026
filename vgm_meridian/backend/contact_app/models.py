from django.db import models
from django.utils import timezone


class Contact(models.Model):
    """
    Model to store contact form submissions.
    """
    name = models.CharField(max_length=200, help_text="Full name of the person")
    email = models.EmailField(help_text="Email address")
    subject = models.CharField(max_length=300, blank=True, help_text="Subject of the message")
    message = models.TextField(help_text="Message content")
    created_at = models.DateTimeField(default=timezone.now, help_text="Timestamp when the message was received")
    is_read = models.BooleanField(default=False, help_text="Whether the message has been read")

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Message'
        verbose_name_plural = 'Contact Messages'

    def __str__(self):
        return f"{self.name} - {self.subject}"
