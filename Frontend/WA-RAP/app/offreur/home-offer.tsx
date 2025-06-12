import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Ionicons name="location-outline" size={32} color="#205C3B" style={{ marginRight: 8 }} />
        <Text style={styles.logo}>Wa-Rap</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenue !</Text>
        <Text style={styles.subtitle}>Que souhaitez-vous faire?</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="add-circle-outline" size={28} color="#205C3B" style={styles.icon} />
            <View>
              <Text style={styles.buttonText}>Creer un offre</Text>
              <Text style={styles.buttonSub}>Crean offre</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="briefcase-outline" size={28} color="#205C3B" style={styles.icon} />
            <View>
              <Text style={styles.buttonText}>Mes offres</Text>
              <Text style={styles.buttonSub}>Mes offres</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="chatbubble-outline" size={28} color="#205C3B" style={styles.icon} />
            <View>
              <Text style={styles.buttonText}>Messages</Text>
              <Text style={styles.buttonSub}>Presages</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabBar}>
        <Ionicons name="home" size={28} color="#205C3B" />
        <Ionicons name="search" size={28} color="#205C3B" />
        <Ionicons name="briefcase" size={28} color="#205C3B" />
        <Ionicons name="person" size={28} color="#205C3B" />
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
    paddingTop: 8,
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
  buttonGroup: {
    gap: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  icon: {
    marginRight: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#205C3B",
  },
  buttonSub: {
    fontSize: 12,
    color: "#888",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 2,
    borderColor: "#205C3B",
    backgroundColor: "#F7F8F5",
  },
});
