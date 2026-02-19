from django.shortcuts import render


def index(request):
    """Serve React's index.html for all non-API routes (SPA catch-all)."""
    return render(request, 'index.html')
