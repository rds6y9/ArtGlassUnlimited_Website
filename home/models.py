from django.db import models


class HomeImage(models.Model):

	title = models.CharField(max_length=100, default='')
	image = models.ImageField(upload_to="home/images/%Y-%m-%d", default='')
	date = models.DateField(default='')
	order = models.IntegerField(default=0)

	def __str__(self):
		return str(self.title)[:100]


class HomeParagraph(models.Model):

	text = models.TextField(default='')
	order = models.IntegerField(default=0)

	def __str__(self):
		return str(self.text)[:100]


class ProductDescription(models.Model):

	text = models.TextField(default='')
	CATEGORY_CHOICES = (
		('STAINED', 'Stained'), 
		('ETCHED', 'Etched'),
		('FACETED', 'Faceted'),
	)
	category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)

	def __str__(self):
		return str(self.text)[:100]


class ProductSlide(models.Model):

	title = models.CharField(max_length=100, default='')
	image = models.ImageField(upload_to="home/images/%Y-%m-%d", default='')
	date = models.DateField(default='')
	CATEGORY_CHOICES = (
		('STAINED', 'Stained'),
		('ETCHED', 'Etched'), 
		('FACETED', 'Faceted'),
	)
	category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)
	order = models.IntegerField(default=0)

	def __str__(self):
		return str(self.title)[:100]


class ContactImage(models.Model):

	title = models.CharField(max_length=100, default='')
	image = models.ImageField(upload_to="contact/images/%Y-%m-%d", default='')
	date = models.DateField(default='')

	def __str__(self):
		return str(self.title)[:100]
	