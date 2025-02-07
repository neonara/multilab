from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.avi import *
from .views.notifications import *
from .views.notifications import *
from .views.project import *
from .views.offres import *
from .views.stageur import *
from .views.job import *
from .views.offrestage import *
from .views.PersationViews import (
    PersationListView, PersationDetailView, PersationCreateView,
    PersationUpdateView, PersationDeleteView, PersationViewSet
)
from .views.Event import (EventViewSet, EventArticleViewSet, EventCreateView, EventUpdateView, EventDeleteView,
                          EventListView, EventDetailView, ArticleCreateView, ArticleUpdateView, ArticleDeleteView)
from .views.CandidateViewSet import *
# routes URLCOF
from .views.job import *
from .views.offrestage import *
from .views.PersationViews import (
    PersationListView, PersationDetailView, PersationCreateView,
    PersationUpdateView, PersationDeleteView, PersationViewSet
)
from .views.Event import (EventViewSet, EventArticleViewSet, EventCreateView, EventUpdateView, EventDeleteView,
                          EventListView, EventDetailView, ArticleCreateView, ArticleUpdateView, ArticleDeleteView)
from .views.CandidateViewSet import *
# routes URLCOF
router = DefaultRouter()
router.register(r'avis', AvisViewSet)
#
#
router.register(r'project', ProjectViewSet)
#
router.register(r'persations', PersationViewSet)
#
router.register(r'events', EventViewSet)
router.register(r'event-articles', EventArticleViewSet)
#
router.register(r'ApplicationEmploi', OffresViewSet)
#
router.register(r'ApplicationStageur', StagieurViewSet)
#
router.register(r'stage', OffreStageViewSet)
#
router.register(r'emploi', Offre_descriptionViewSet)
#
router.register(r'candidates-simplify', CandidateViewSet)
urlpatterns = [
    path('', include(router.urls)),


    path('avis_list/', AvisListView.as_view(), name='avis_list'),
    path('avis_create/', AvisCreateView.as_view(), name='avis_create'),
    path('avis/<int:pk>/update/', AvisUpdateView.as_view(), name='avis_update'),
    path('avis/<int:pk>/delete/', AvisDeleteView.as_view(), name='avis_delete'),




    # ? stage routes
    path('stage_list/', OffreStageCreateView.as_view(), name='stage_list'),




    # ? stage routes
    path('stage_list/', OffreStageCreateView.as_view(), name='stage_list'),


    path('stage_list/<int:pk>/delete/',
         OffreStageDeleteView.as_view(), name='stage_delete'),
    path('stage/<int:pk>/update/',
         OffreStageUpdateView.as_view(), name='stage_update'),

    path('stage_list/<int:pk>/delete/',
         OffreStageDeleteView.as_view(), name='stage_delete'),
    path('stage/<int:pk>/update/',
         OffreStageUpdateView.as_view(), name='stage_update'),
    path('stage_list/create/', OffreStageCreateView.as_view(), name='stage_create'),
    # ? stageur
    path('stage_condidat_list/', StagieurView.as_view(),
         name='stage_condidat_list'),

    # ?job routes
    path('job_list/', Offre_descriptionCreateView.as_view(), name='job_list'),
    path('job_list/<int:pk>/',
         Offre_descriptionDetailView.as_view(), name='job_detail'),
    path('job_list/<int:pk>/delete/',
         Offre_descriptionDeleteView.as_view(), name='job_delete'),
    path('job/<int:pk>/update/',
         Offre_descriptionUpdateView.as_view(), name='job_update'),
    # ?condidat routes
    # ? stageur
    path('stage_condidat_list/', StagieurView.as_view(),
         name='stage_condidat_list'),

    # ?job routes
    path('job_list/', Offre_descriptionCreateView.as_view(), name='job_list'),
    path('job_list/<int:pk>/',
         Offre_descriptionDetailView.as_view(), name='job_detail'),
    path('job_list/<int:pk>/delete/',
         Offre_descriptionDeleteView.as_view(), name='job_delete'),
    path('job/<int:pk>/update/',
         Offre_descriptionUpdateView.as_view(), name='job_update'),
    # ?condidat routes
    path('condidat_list/', CondidatListView.as_view(), name='condidat_list'),
    # ? project routes
    # ? project routes
    path('project_list/', ProjectCreateView.as_view(), name='project_list'),
    path('project_list/<int:pk>/delete/',
         ProjectDeleteView.as_view(), name='project_delete'),
    path('project/<int:pk>/update/',
         ProjectUpdateView.as_view(), name='project_update'),
    # prestation routes
    path('persation_list', PersationListView.as_view(), name='persation_list'),
    path('persation/<int:pk>/detail/',
         PersationDetailView.as_view(), name='persation_detail'),
    path('create_persation/', PersationCreateView.as_view(),
         name='persation_create'),
    path('persation/<int:pk>/update/',
         PersationUpdateView.as_view(), name='persation_update'),
    path('persation/<int:pk>/delete/',
         PersationDeleteView.as_view(), name='persation_delete'),
    # event routes
    path('event_list/', EventListView.as_view(), name='event_list'),
    path('events/<int:pk>/', EventDetailView.as_view(), name='event_detail'),
    path('event_create/', EventCreateView.as_view(), name='event_create'),
    path('events/<int:pk>/update/', EventUpdateView.as_view(), name='event_update'),
    path('events/<int:pk>/delete/', EventDeleteView.as_view(), name='event_delete'),
    # event article routes
    path('events/<int:event_pk>/articles/add/',
         ArticleCreateView.as_view(), name='article_create'),
    path('events/<int:event_pk>/articles/<int:pk>/edit/',
         ArticleUpdateView.as_view(), name='article_update'),
    path('events/<int:event_pk>/articles/<int:pk>/delete/',
         ArticleDeleteView.as_view(), name='article_delete'),
     #     notif
    path('notifications/',get_notifications, name='notifications'),
    path('notifications/<int:notification_id>/mark-read/', mark_notification_read, name='mark_notification_read'),
     #     candidate
      path('candidate_simplify_list', CandidateListView.as_view(), name='candidate_simplify_list'),
    path('project_list/<int:pk>/delete/',
         ProjectDeleteView.as_view(), name='project_delete'),
    path('project/<int:pk>/update/',
         ProjectUpdateView.as_view(), name='project_update'),
    # prestation routes
    path('persation_list', PersationListView.as_view(), name='persation_list'),
    path('persation/<int:pk>/detail/',
         PersationDetailView.as_view(), name='persation_detail'),
    path('create_persation/', PersationCreateView.as_view(),
         name='persation_create'),
    path('persation/<int:pk>/update/',
         PersationUpdateView.as_view(), name='persation_update'),
    path('persation/<int:pk>/delete/',
         PersationDeleteView.as_view(), name='persation_delete'),
    # event routes
    path('event_list/', EventListView.as_view(), name='event_list'),
    path('events/<int:pk>/', EventDetailView.as_view(), name='event_detail'),
    path('event_create/', EventCreateView.as_view(), name='event_create'),
    path('events/<int:pk>/update/', EventUpdateView.as_view(), name='event_update'),
    path('events/<int:pk>/delete/', EventDeleteView.as_view(), name='event_delete'),
    # event article routes
    path('events/<int:event_pk>/articles/add/',
         ArticleCreateView.as_view(), name='article_create'),
    path('events/<int:event_pk>/articles/<int:pk>/edit/',
         ArticleUpdateView.as_view(), name='article_update'),
    path('events/<int:event_pk>/articles/<int:pk>/delete/',
         ArticleDeleteView.as_view(), name='article_delete'),
     #     notif
    path('notifications/',get_notifications, name='notifications'),
    path('notifications/<int:notification_id>/mark-read/', mark_notification_read, name='mark_notification_read'),
     #     candidate
      path('candidate_simplify_list', CandidateListView.as_view(), name='candidate_simplify_list'),
   
]
