from django.shortcuts import render, redirect
from ..forms import SignUpForm, LoginForm
from django.contrib.auth import authenticate, login,logout
# Create your views here.
from account.model.report import Report
from ..models import User
from multi_lab.models.avis import Avis
from multi_lab.models.devis import Devi
from multi_lab.models.jobdescription import Offre_description
from multi_lab.models.stagedescription import OffreStage
from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView
from ..serializers import LoginFormSerializer
from django.contrib.auth.decorators import login_required

def index(request):
    return render(request, 'index.html')


def register(request):
    msg = None
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            msg = 'user created'
            return redirect('login_view')
        else:
            msg = 'form is not valid'
    else:
        form = SignUpForm()
    return render(request,'register.html', {'form': form, 'msg': msg})


def login_view(request):
    form = LoginForm(request.POST or None)
    msg = None
    if request.method == 'POST':
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None and user.is_admin:
                login(request, user)
                return redirect('adminpage')
            elif user is not None and user.is_client:
                login(request, user)
                return redirect('customer')
            elif user is not None and user.is_moderator:
                login(request, user)
                return redirect('employee')
            else:
                msg= 'invalid credentials'
        else:
            msg = 'error validating form'
    return render(request, 'login.html', {'form': form, 'msg': msg})


# def admin(request):
#     return render(request,'admin.html')


def customer(request):
    user = request.user  # Get the logged-in user
    reports = Report.objects.filter(client=user)  # Get all reports related to the user
    return render(request, './client/dashClient.html', {'reports': reports})

@login_required()
def employee(request):
    class Counts:
        def __init__(self, avis_count, devis_count, Offre_description_count, OffreStage_count):
            self.avis_count = avis_count
            self.devis_count = devis_count
            self.Offre_description_count = Offre_description_count
            self.OffreStage_count = OffreStage_count

    counts = Counts(
        avis_count=Avis.objects.count(),
        devis_count=Devi.objects.count(),
        Offre_description_count=Offre_description.objects.count(),
        OffreStage_count=OffreStage.objects.count()
    )

    return render(request, './moderator/dashboard_moderator.html', {'counts': counts})





class LoginView(APIView):
    def post(self, request):
        serializer = LoginFormSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({'message': 'Login successful'}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return JsonResponse({'message': 'Logout successful'}, status=status.HTTP_200_OK)