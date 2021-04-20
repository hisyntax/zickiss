from django.shortcuts import render
from .models import Music
# Create your views here.
def index(request):
    lattest_music = Music.objects.order_by('-timestamp')[:2]
    music = Music.objects.all()
    context = {
        'lattest_music': lattest_music,
        'music': music,
    }
    return render(request, 'index.html', context)