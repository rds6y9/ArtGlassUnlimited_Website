from django.shortcuts import render
from .models import HomeImage, HomeParagraph, ProductSlide, ContactImage

def home_page(request):

	home_images = HomeImage.objects.order_by('order')
	paragraphs = HomeParagraph.objects.order_by('order')

	return render(request, 'home_revised.html', {
		'home_images': home_images,
		'paragraphs': paragraphs,})

def products_page(request):

	stained_slides = ProductSlide.objects.filter(category='STAINED').order_by('order')
	etched_slides = ProductSlide.objects.filter(category='ETCHED').order_by('order')
	faceted_slides = ProductSlide.objects.filter(category='FACETED').order_by('order')

	return render(request, 'products_revised.html', {
		'stained_slides': stained_slides,
		'etched_slides': etched_slides,
		'faceted_slides': faceted_slides,})

def contact_page(request):

	contact_image = ContactImage.objects.all()

	return render(request, 'contact_revised.html', {'contact_image': contact_image})