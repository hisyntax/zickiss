from django.db import models

# Create your models here.
class Music(models.Model):
    name = models.CharField(max_length=250)
    music = models.FileField(upload_to='music')
    timestamp = models.DateTimeField(auto_now_add=True)
    
    
    def __str__ (self):
        return self.name