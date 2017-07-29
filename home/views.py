from django.shortcuts import render
from .models import HomeSlide

def home_page(request):
	carousel_slides = HomeSlide.objects.all()
	return render(request, 'home.html', {'carousel_slides': carousel_slides})

def products_page(request):
	return render(request, 'products.html')

def contact_page(request):
	return render(request, 'contact.html')
