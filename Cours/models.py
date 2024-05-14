from django.db import models
from django.contrib.auth.models import User

class Parcours(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField()
    createur = models.ForeignKey(User, on_delete=models.CASCADE)
    date_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nom

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    CLASSE_CHOICES = (
        ('seconde', 'Seconde'),
        ('premiere', 'Première'),
        ('terminale', 'Terminale'),
    )
    classe = models.CharField(max_length=10, choices=CLASSE_CHOICES)
