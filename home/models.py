from django.db import models
 
# Create your models here.

class HomeSlide(models.Model):
	image = models.ImageField(upload_to="home/%Y-%m-%d/", 
		default='')
	caption = models.TextField(default='')
	date = models.DateField(default='')

	def __str__(self):
		return str(self.caption)[:100]