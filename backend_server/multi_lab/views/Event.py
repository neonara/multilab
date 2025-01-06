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

class EventListView(ListView):
    model = Event
    template_name = 'events/event_list.html'
    context_object_name = 'events'
    
    def get_queryset(self):
        return Event.objects.filter(status='published')

class EventDetailView(DetailView):
    model = Event 
    template_name = 'events/event_detail.html'
    context_object_name = 'event'
class EventCreateView(SuccessMessageMixin, CreateView):
    model = Event
    fields = ['title', 'description', 'date_event', 'image', 'status']
    success_url = reverse_lazy('event-list')
    success_message = "Événement créé avec succès !"

class EventUpdateView(SuccessMessageMixin, UpdateView):
    model = Event
    fields = ['title', 'description', 'date_event', 'image', 'status']
    success_url = reverse_lazy('event-list')
    success_message = "Événement mis à jour avec succès !"

class EventDeleteView(SuccessMessageMixin, DeleteView):
    model = Event
    success_url = reverse_lazy('event-list')
    success_message = "Event deleted successfully!"

class ArticleCreateView(SuccessMessageMixin, CreateView):
    model = EventArticle
    fields = ['description', 'image1', 'image2', 'image3']
    template_name = 'events/article_form.html'
    success_message = "Article created successfully!"

    def form_valid(self, form):
        form.instance.event = get_object_or_404(Event, pk=self.kwargs['event_pk'])
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['event'] = get_object_or_404(Event, pk=self.kwargs['event_pk'])
        return context

    def get_success_url(self):
        return reverse('event-detail', kwargs={'pk': self.kwargs['event_pk']})
#api article event
class ArticleUpdateView(SuccessMessageMixin, UpdateView):
    model = EventArticle
    fields = ['description', 'image1', 'image2', 'image3']
    template_name = 'events/article_form.html'
    success_message = "Article updated successfully!"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['event'] = self.object.event
        return context

    def get_success_url(self):
        return reverse('event-detail', kwargs={'pk': self.object.event.pk})

class ArticleDeleteView(SuccessMessageMixin, DeleteView):
    model = EventArticle
    template_name = 'events/article_confirm_delete.html'
    success_message = "Article deleted successfully!"

    def get_success_url(self):
        return reverse('event-detail', kwargs={'pk': self.object.event.pk})


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
  