from django.urls import path

from mywebchat import views

urlpatterns=[
    path("",views.chat,name="index"),
]