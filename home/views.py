from django.shortcuts import render
from .models import HomeImage, ProductDescription, ProductSlide, ContactImage

def home_page(request):

	home_images = HomeImage.objects.order_by('order')

	# return render(request, 'home_revised.html', {
	# 	'home_images': home_images,
	# 	'paragraphs': paragraphs,})

	return render(request, 'home.html', {
		'home_images': home_images,
		})
		

def products_page(request):

	stained_slides = ProductSlide.objects.filter(category='STAINED').order_by('order')
	etched_slides = ProductSlide.objects.filter(category='ETCHED').order_by('order')
	faceted_slides = ProductSlide.objects.filter(category='FACETED').order_by('order')

	stained_desc = ProductDescription.objects.filter(category='STAINED').first()
	etched_desc = ProductDescription.objects.filter(category='ETCHED').first()
	faceted_desc = ProductDescription.objects.filter(category='FACETED').first()

	return render(request, 'products.html', {
		'stained_slides': stained_slides,
		'etched_slides': etched_slides,
		'faceted_slides': faceted_slides,
		'stained_desc': stained_desc,
		'etched_desc': etched_desc,
		'faceted_desc': faceted_desc,})

def contact_page(request):

	contact_image = ContactImage.objects.first()

	return render(request, 'contact.html', {'contact_image': contact_image})
