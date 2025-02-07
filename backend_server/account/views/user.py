from django.shortcuts import render, redirect
from ..forms import SignUpForm, LoginForm
from django.contrib.auth import authenticate, login,logout
# Create your views here.
from account.model.report import Report
from ..models import User
from multi_lab.models.avis import Avis
from multi_lab.models.perstation import Persation
from multi_lab.models.event import Event
from multi_lab.models.jobdescription import Offre_description
from multi_lab.models.stagedescription import OffreStage
from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView
from ..serializers import LoginFormSerializer
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view
import json
from ..utils import send_contact_form_email

@api_view(['POST'])
def send_contact_email(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone')
        company_name = data.get('company_name')
        subject = data.get('subject')
        message = data.get('message')

        try:
            # Call the utility function to send the email
            send_contact_form_email(name,company_name, email, phone, subject, message)
            return JsonResponse({'message': 'Email sent successfully'}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
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
    context = {
        'background_image_url': '/static/images/Login-bg.jpg'  # Adjust path accordingly
    }
    form = LoginForm(request.POST or None)
    msg = None

    if request.method == 'POST':
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)

            if user is not None:
                login(request, user)
                if user.is_admin:
                    return redirect('adminpage')
                elif user.is_client:
                    return redirect('customer')
                elif user.is_moderator:
                    return redirect('employee')
            else:
                msg = 'Invalid credentials'
        else:
            msg = 'Error validating form'

    # Merge 'form' and 'msg' into the context dictionary
    context.update({'form': form, 'msg': msg})

    return render(request, 'login.html', context)



# def admin(request):
#     return render(request,'admin.html')


def customer(request):
    user = request.user  # Get the logged-in user
    reports = Report.objects.filter(client=user).order_by('-created_at')  # Get all reports related to the user
    return render(request, './client/dashClient.html', {'reports': reports})

@login_required()
def employee(request):
    class Counts:
        def __init__(self, avis_count, Offre_description_count, OffreStage_count,Report_count ,Persation_count , event_count):
            self.avis_count = avis_count
            self.Offre_description_count = Offre_description_count
            self.OffreStage_count = OffreStage_count
            self.Report_count = Report_count
            self.Persation_count = Persation_count
            self.event_count = event_count


    counts = Counts(
        avis_count=Avis.objects.count(),
        Offre_description_count=Offre_description.objects.count(),
        OffreStage_count=OffreStage.objects.count(),
        Report_count=Report.objects.count(),
        Persation_count=Persation.objects.count(),
         event_count=Event.objects.count(),
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

                # Fetch counts
                class Counts:
                    def __init__(self, avis_count, Offre_description_count, OffreStage_count, Report_count, Persation_count, event_count):
                        self.avis_count = avis_count
                        self.Offre_description_count = Offre_description_count
                        self.OffreStage_count = OffreStage_count
                        self.Report_count = Report_count
                        self.Persation_count = Persation_count
                        self.event_count = event_count
                
                counts = Counts(
                    avis_count=Avis.objects.count(),
                    Offre_description_count=Offre_description.objects.count(),
                    OffreStage_count=OffreStage.objects.count(),
                    Report_count=Report.objects.count(),
                    Persation_count=Persation.objects.count(),
                    event_count=Event.objects.count(),
                )

                # Convert counts object to a dictionary
                counts_data = {
                    "avis_count": counts.avis_count,
                    "Offre_description_count": counts.Offre_description_count,
                    "OffreStage_count": counts.OffreStage_count,
                    "Report_count": counts.Report_count,
                    "Persation_count": counts.Persation_count,
                    "event_count": counts.event_count
                }

                return JsonResponse({
                    'message': 'Login successful',
                    'counts': counts_data
                }, status=status.HTTP_200_OK)
            
            else:
                return JsonResponse({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return JsonResponse({'message': 'Logout successful'}, status=status.HTTP_200_OK)