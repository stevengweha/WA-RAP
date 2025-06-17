import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirm, setConfirm] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (motDePasse !== confirm) {
      Alert.alert("Erreur", "Les mots de passe ne correspondent pas");
      return;
    }
    try {
      const response = await fetch("https://localhost:5001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          mot_de_passe: motDePasse,
          téléphone: telephone,
          adresse,
          
        }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert("Succès", "Compte créé !");
        router.push("/auth/add");
      } else {
        Alert.alert("Erreur", data.error || "Erreur lors de l'inscription");
      }
    } catch (e) {
      Alert.alert("Erreur", "Impossible de contacter le serveur");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Ionicons name="person-add-outline" size={32} color="#205C3B" style={{ marginRight: 8 }} />
        <Text style={styles.logo}>Inscription</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Créer un compte</Text>
        <Text style={styles.subtitle}>Remplissez les champs pour vous inscrire</Text>
        <TextInput style={styles.input} placeholder="Nom" value={nom} onChangeText={setNom} />
        <TextInput style={styles.input} placeholder="Prenom" value={prenom} onChangeText={setPrenom} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Téléphone" value={telephone} onChangeText={setTelephone} keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Adresse" value={adresse} onChangeText={setAdresse} />
        <TextInput style={styles.input} placeholder="Mot de passe" value={motDePasse} onChangeText={setMotDePasse} secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirmer le mot de passe" value={confirm} onChangeText={setConfirm} secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 16 }}>
          <Text style={{ color: "#333" }}>Déjà un compte ? </Text>
          <Link href="/auth/login" style={{ color: "#205C3B", fontWeight: "bold" }}>Se connecter</Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7F8F5" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 8,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#205C3B",
    letterSpacing: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#205C3B",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#205C3B",
    color: "#205C3B",
  },
  button: {
    backgroundColor: "#205C3B",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
