from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Gestionnaire personnalisé
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email obligatoire')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        return self.create_user(email, password, **extra_fields)

# Modèle principal User_
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    telephone = models.CharField(max_length=50)
    adresse = models.CharField(max_length=50)
    role = models.CharField(max_length=50)
    bio = models.CharField(max_length=50, blank=True, null=True)
    photo_profil = models.CharField(max_length=50, blank=True, null=True)
    date_inscription = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nom', 'prenom']

    def __str__(self):
        return self.email

# Posteur, Chercheur, Admin liés à User
class Posteur(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
class Competence(models.Model):
    nom = models.CharField(max_length=100)

class Chercheur(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    competences = models.ManyToManyField(Competence, related_name='chercheurs')

class Admin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
