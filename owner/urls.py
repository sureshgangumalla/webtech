from django.contrib import admin
from django.urls import include, path
from owner.views import index, insert_apartment_details, edit_apartment_details, delete_apartment_details

urlpatterns = [
    path('<int:user_id>/',index,name="Owner Index"),
    path('<int:user_id>/save/',insert_apartment_details,name="Save Apartment"),
    path('edit/<int:apartment_id>',edit_apartment_details,name="Edit Apartment"),
    path('delete/<int:apartment_id>', delete_apartment_details, name="Delete Apartment"),
]