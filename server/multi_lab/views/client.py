from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework_simplejwt.tokens import RefreshToken
from ..models.clients import Clients
from ..serializers import ClientsSerializer
from django.contrib.auth import get_user_model, authenticate
from rest_framework.views import APIView
from django.db import IntegrityError
User = get_user_model()
class ClientsViewSet(viewsets.ModelViewSet):
    queryset = Clients.objects.all()
    serializer_class = ClientsSerializer
class RegistrationView(APIView):
    def post(self, request):
        serializer = ClientsSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user = User.objects.create_user(
                    username=serializer.validated_data['email'],
                    password=serializer.validated_data['password']
                )
                user.fullname = serializer.validated_data['fullname']
                user.nom_entreprise = serializer.validated_data['nom_entreprise']
                user.numero_telephone = serializer.validated_data['numero_telephone']
                user.save()
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key}, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response({'error': 'Email address is already registered.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
       

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if not user:
            return Response({'error': 'Invalid login credentials'}, status=status.HTTP_400_BAD_REQUEST)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_200_OK)
