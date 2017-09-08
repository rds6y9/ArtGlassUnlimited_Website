from django.test import TestCase
from django.urls import resolve
from home.views import home_page, products_page, contact_page
 
class HomePageTests(TestCase):

	def test_root_url_resolves_to_home_view(self):
		found = resolve('/')
		self.assertEqual(found.func, home_page)

	def test_root_url_uses_home_template(self):
		response = self.client.get('/')
		self.assertTemplateUsed(response, 'home.html')

class ProductPageTests(TestCase):

	def test_root_url_resolves_to_products_view(self):
		found = resolve('/products')
		self.assertEqual(found.func, products_page)

	def test_products_url_uses_products_template(self):
		response = self.client.get('/products')
		self.assertTemplateUsed(response, 'products.html')

class ContactPageTests(TestCase):

	def test_root_url_resolves_to_contact_view(self):
		found = resolve('/contact')
		self.assertEqual(found.func, contact_page)
	
	def test_contact_url_uses_contact_template(self):
		response = self.client.get('/contact')
		self.assertTemplateUsed(response, 'contact.html')
