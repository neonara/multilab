from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from ..models.event import Event , EventArticle
from ..serializer.EventSerializer import EventSerializer, EventArticleSerializer
from django.contrib.messages.views import SuccessMessageMixin
from django.shortcuts import get_object_or_404
from django.urls import reverse
from django.http import JsonResponse

import logging

logger = logging.getLogger(__name__)
class EventListView(ListView):
    model = Event
    template_name = './moderator/events/event_list.html'
    context_object_name = 'events'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        print("Events in context:", context['events'])  # Debug print
        return context
    
class EventDetailView(DetailView):
    model = Event 
    template_name = './moderator/events/event_list.html'
    context_object_name = 'event'
class EventCreateView(SuccessMessageMixin, CreateView):
    model = Event
    fields = ['title', 'description', 'date_event', 'image', 'status']
    template_name = './moderator/events/event_list.html'
    success_url = reverse_lazy('event_list')
    success_message = "Événement créé avec succès !"
    

    def form_invalid(self, form):
        logger.error(f"Form errors: {form.errors}")
        return JsonResponse({
            'success': False,
            'errors': form.errors
        })

class EventUpdateView(SuccessMessageMixin, UpdateView):
    model = Event
    fields = ['title', 'description', 'date_event', 'image', 'status']
    template_name = './moderator/events/event_list.html'
    success_url = reverse_lazy('event_list')
    success_message = "Événement mis à jour avec succès !"
    def form_invalid(self, form):
        print("Form errors:", form.errors)  # Debugging
        return super().form_invalid(form)

class EventDeleteView(SuccessMessageMixin, DeleteView):
    model = Event
    success_url = reverse_lazy('event_list')
    success_message = "Événement supprimé avec succès !"
    def form_invalid(self, form):
        print("Form errors:", form.errors)  # Debugging
        return super().form_invalid(form)

class ArticleCreateView(SuccessMessageMixin, CreateView):
    model = EventArticle
    fields = ['description', 'image1', 'image2', 'image3']
    template_name = './moderator/events/article_form.html'  # Use a specific template for clarity
    success_message = "Article créé avec succès !"

    def form_valid(self, form):
        # Fetch the event based on the event_pk parameter
        event = get_object_or_404(Event, pk=self.kwargs['event_pk'])
        # Assign the event to the article
        form.instance.event = event
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['event'] = get_object_or_404(Event, pk=self.kwargs['event_pk'])
        return context

    def get_success_url(self):
        return reverse('event_list')

#api article event
class ArticleUpdateView(SuccessMessageMixin, UpdateView):
    model = EventArticle
    fields = ['description', 'image1', 'image2', 'image3']
    template_name = './moderator/events/event_list.html'
    success_message = "Article mis à jour avec succès !"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['event'] = self.object.event
        return context

    def get_success_url(self):
        return reverse('event_list')

class ArticleDeleteView(SuccessMessageMixin, DeleteView):
    model = EventArticle
    template_name = './moderator/events/event_list.html'
    success_message = "Article supprimé avec succès !"
    def get_success_url(self):
        return reverse('event_list')
    


#api methods
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
   

    
    def get_queryset(self):
        queryset = Event.objects.all()
        status = self.request.query_params.get('status', None)
        if status is not None:
            queryset = queryset.filter(status=status)
        return queryset

class EventArticleViewSet(viewsets.ModelViewSet):
    queryset = EventArticle.objects.all()
    serializer_class = EventArticleSerializer
  