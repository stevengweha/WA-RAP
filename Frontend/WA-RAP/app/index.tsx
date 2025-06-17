import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ChatBubble from "./components/ChatBubble";

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Ionicons name="location-outline" size={32} color="#205C3B" style={{ marginRight: 8 }} />
        <Text style={styles.logo}>Wa-Rap</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://img.freepik.com/vecteurs-libre/concept-recherche-emploi-illustration-personnes-cherchant-nouvel-emploi_23-2148655496.jpg" }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Trouvez un emploi simplement</Text>
        <Text style={styles.subtitle}>
          WA-RAP est une application qui facilite la recherche d’emploi dans le secteur formel et informel. 
          Que vous soyez à la recherche d’un job ou que vous proposiez une offre, WA-RAP vous connecte rapidement à la bonne opportunité.
        </Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Link href="/auth/login" style={styles.buttonText}>Se connecter</Link>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
            <Link href="/auth/add" style={[styles.buttonText, { color: "#205C3B" }]}>Créer un compte</Link>
          </TouchableOpacity>
        </View>
      </View>
      <ChatBubble />
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
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 220,
    height: 160,
    marginBottom: 24,
    borderRadius: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#205C3B",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 32,
    textAlign: "center",
  },
  buttonGroup: {
    width: "100%",
    gap: 16,
  },
  button: {
    backgroundColor: "#205C3B",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginBottom: 8,
  },
  buttonOutline: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#205C3B",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
