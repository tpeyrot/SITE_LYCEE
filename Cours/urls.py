from django.urls import path
from . import views
from .views import *

urlpatterns = [
#    path('', views.accueil, name='accueil'),
    path('', views.accueil2, name='accueil'),
    path('signup/', signup, name='signup'),
    path('login/', login_view, name='login'),
    path('2nde.html', Seconde, name='2NDE'),
    path('1ereSPE.html', PremiereSPE, name='1SPE'),
    path('1ereES.html', PremiereES, name='1ES'),
    path('PAGE_TEST2.html', PAGE_TEST2, name='1ES'),
]
