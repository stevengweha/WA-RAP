from rest_framework import serializers
from .models import User, Posteur, Chercheur, Admin, Competence

class CompetenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competence
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'nom', 'prenom', 'telephone', 'adresse', 'role', 'bio', 'photo_profil', 'date_inscription']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'nom', 'prenom', 'password', 'telephone', 'adresse', 'role']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class ChercheurSerializer(serializers.ModelSerializer):
    competences = CompetenceSerializer(many=True)

    class Meta:
        model = Chercheur
        fields = ['id', 'user', 'competences']
