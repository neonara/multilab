from django.http import JsonResponse
from ..models.notification import Notification
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from ..serializers import NotificationSerializer
import logging
logger = logging.getLogger(__name__)
@login_required
def get_notifications(request):
    try:
        notifications = Notification.objects.filter(
            recipient=request.user,
            is_read=False
        ).order_by('-created_at')[:5]
        
        data = [{
            'id': notif.id,
            'message': notif.message,
            'created_at': notif.created_at.strftime("%d/%m/%Y %H:%M"),
            'avis_id': notif.avis.id if notif.avis else None,
            'report_id': notif.report.id if notif.report else None
        } for notif in notifications]
        
        return JsonResponse({
            'notifications': data,
            'count': notifications.count()
        })
    except Exception as e:
        logger.error(f"Error in get_notifications: {str(e)}")
        return JsonResponse({'error': str(e)}, status=500)

@login_required
def mark_notification_read(request, notification_id):
    if request.method == 'POST':
        notification = get_object_or_404(Notification, id=notification_id, recipient=request.user)
        notification.is_read = True
        notification.save()
        return JsonResponse({'success': True})
    return JsonResponse({'error': 'Invalid request'}, status=400)
