from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import SignUpForm
from .models import UserProfile
from django.contrib.auth.forms import AuthenticationForm



def accueil(request):
    return render(request, 'accueil.html')

def accueil2(request):
    return render(request, 'index.html')

def Seconde(request):
    return render(request, '2nde.html')
def PremiereSPE(request):
    return render(request, '1ereSPE.html')
def PremiereES(request):
    return render(request, '1ereES.html')
def TermSPE(request):
    return render(request, 'TermSPE.html')
def TermES(request):
    return render(request, 'TermES.html')
def PAGE_TEST2(request):
    return render(request, 'PAGE_TEST2.html')

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            # Créer un UserProfile associé à l'utilisateur
            user_profile = UserProfile.objects.create(user=user, classe=form.cleaned_data['classe'])
            login(request, user)
            return redirect('accueil')  # Redirige vers la page d'accueil après l'inscription
    else:
        form = SignUpForm()
    return render(request, 'registration/signup.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                # Redirection vers la page d'accueil après connexion réussie
                return redirect('accueil')
    else:
        form = AuthenticationForm()
    return render(request, 'registration/login.html', {'form': form})
