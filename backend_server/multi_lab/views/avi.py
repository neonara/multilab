import logging
from django.utils.html import strip_tags
from django.template.loader import render_to_string
from django.core.mail import send_mail
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.db.models import Q
from django.contrib import messages
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from django.shortcuts import render, redirect, get_object_or_404
from ..serializers import AvisSerializer
from rest_framework import viewsets
from ..models.avis import Avis
from account.models import User
from ..models.notification import Notification
logger = logging.getLogger(__name__)


class AvisViewSet(viewsets.ModelViewSet):
    queryset = Avis.objects.all()
    serializer_class = AvisSerializer
#!"""""djanoooo"""""""""""


@method_decorator(login_required(), name='dispatch')
class AvisListView(ListView):
    model = Avis
    template_name = 'moderator/avisClient.html'
    queryset = Avis.objects.order_by('-created_at')


@method_decorator(login_required(), name='dispatch')
class AvisCreateView(CreateView):
    model = Avis
    template_name = 'client/dashClient.html'  # Name of your template for the form
    fields = '__all__'  # Fields to include in the form
    success_url = reverse_lazy('customer')

    def form_valid(self, form):
        try:
            form.instance.client = self.request.user  # Assign the current user
            response = super().form_valid(form)

            # Fetch all moderators
            # Adjust this filter as needed
            moderators = User.objects.filter(is_moderator=True)
            if not moderators.exists():
                print("No moderators found!")  # Debugging message
                return response

            # Debugging message
            print(f"Found {moderators.count()} moderators")

            # Create notifications
            for moderator in moderators:
                notification = Notification.objects.create(
                    recipient=moderator,
                    message=f"Nouvel avis créé par {self.request.user.username}",
                    avis=self.object
                )
                logger.info(f"Created notification {notification.id} for moderator {moderator.username}")
                # Send email to the moderator
                subject = 'Nouveau Avis Créé'
                context = {
                    'moderator': moderator,
                    'client': self.request.user,
                    'avis': self.object
                }
                html_message = render_to_string(
                    'moderator/notif/avis_notification_email.html', context)
                plain_message = strip_tags(html_message)
                from_email = 'commercial@multilab.com.tn'  # Sender email, adjust as needed
                to_email = moderator.email or moderator.username

                try:
                    send_mail(
                        subject,
                        plain_message,
                        from_email,
                        [to_email],
                        html_message=html_message,
                        fail_silently=False
                    )

                except Exception as e:
                    print(f"Failed to send email to {moderator.username}: {e}")
                    logger.info(f"Successfully sent email to moderator {moderator.username} at {moderator.email}")

            messages.success(
                self.request, 'Votre avis a été envoyé avec succès, et les modérateurs ont été notifiés par email.')
        except Exception as e:
            # Debugging message
            print(f"Error during notification creation: {e}")
            messages.error(
                self.request, 'Votre avis a été envoyé, mais une erreur s\'est produite lors de la notification des modérateurs.')

        return response


@method_decorator(login_required(), name='dispatch')
class AvisUpdateView(UpdateView):
    model = Avis
    template_name = 'moderator/avisClient.html'
    fields = '__all__'
    success_url = reverse_lazy('avis_list')

    def form_valid(self, form):
        messages.success(self.request, 'Avis a été modifié avec succès.')
        return super().form_valid(form)

    def form_invalid(self, form):
        if self.request.headers.get('x-requested-with') == 'XMLHttpRequest':
            return JsonResponse({'success': False, 'errors': form.errors}, status=400)
        return super().form_invalid(form)


@method_decorator(login_required(), name='dispatch')
class AvisDeleteView(DeleteView):
    model = Avis
    template_name = './moderator/avisClient.html '  # Name of your template
    success_url = reverse_lazy('avis_list')

    def form_valid(self, form):
        messages.success(self.request, 'Avis a été supprimeé avec succès.')
        return super().form_valid(form)
