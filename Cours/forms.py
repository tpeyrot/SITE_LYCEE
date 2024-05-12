from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User
from .models import UserProfile


class SignUpForm(UserCreationForm):
    classe = forms.ChoiceField(choices=UserProfile.CLASSE_CHOICES)

    class Meta:
        model = User
        fields = ('username', 'password1', 'password2', 'classe',)