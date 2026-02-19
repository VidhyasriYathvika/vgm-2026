from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer


@api_view(['POST'])
def contact_create(request):
    """
    API endpoint to create a new contact form submission.
    """
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        contact = serializer.save()

        # Send email notification
        try:
            subject = f"New Contact Form: {contact.subject or 'No Subject'}"
            message = (
                f"Name: {contact.name}\n"
                f"Email: {contact.email}\n"
                f"Subject: {contact.subject}\n\n"
                f"Message:\n{contact.message}\n"
            )
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_EMAIL],
                fail_silently=False,
            )
        except Exception:
            pass  # Don't fail the API response if email fails

        return Response(
            {
                'success': True,
                'message': 'Thank you for your message! We will get back to you soon.',
                'data': ContactSerializer(contact).data
            },
            status=status.HTTP_201_CREATED
        )
    return Response(
        {
            'success': False,
            'message': 'Please correct the errors below.',
            'errors': serializer.errors
        },
        status=status.HTTP_400_BAD_REQUEST
    )


@api_view(['GET'])
def contact_list(request):
    """
    API endpoint to list all contact form submissions.
    (For admin purposes)
    """
    contacts = Contact.objects.all()
    serializer = ContactSerializer(contacts, many=True)
    return Response(serializer.data)
