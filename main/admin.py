from django.contrib import admin
from .models import Category,Question,Tab,Lession,User

# Register your models here.

admin.site.register(Question)
admin.site.register(Category)
admin.site.register(Tab)
admin.site.register(Lession)
admin.site.register(User)



