from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions

# Swagger
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="API d'Authentification",
      default_version='v1',
      description="Documentation de l'API d'authentification avec JWT et compétences",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="oceane.epadie@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('auth_app.urls')),

    # Swagger UI
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    # Redoc UI
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    # Fichier brut JSON
    path('swagger.json', schema_view.without_ui(cache_timeout=0), name='schema-json'),
]
