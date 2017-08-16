from django.contrib import admin
import home.models

admin.site.register(home.models.HomeImage)
admin.site.register(home.models.HomeParagraph)
admin.site.register(home.models.ProductDescription)
admin.site.register(home.models.ProductSlide)
admin.site.register(home.models.ContactImage)