from django.conf.urls import url
from financialapp2 import views as

urlpatterns = [
    url(r'^$',views.index,name='index'),
]
