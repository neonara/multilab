from django.urls import path


from django.contrib.auth.views import (
    LogoutView, 
    PasswordResetView, 
    PasswordResetDoneView, 
    PasswordResetConfirmView,
    PasswordResetCompleteView
)
urlpatterns = [
   
    path('send_compt/', 
        PasswordResetView.as_view(
            template_name='admin/send_compt.html',
            html_email_template_name='admin/send_compt_email.html'
        ),
        name='send_compt'
    ),
    path('send_compt/done/', PasswordResetDoneView.as_view(template_name='admin/send_compt_done.html'),name='send_compt_done'),
    path('send_compt-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(template_name='admin/send_compt_confirm.html'),name='send_compt_confirm'),
    path('send_compt-complete/',PasswordResetCompleteView.as_view(template_name='admin/send_compt_complete.html'),name='send_compt_complete'),
]
