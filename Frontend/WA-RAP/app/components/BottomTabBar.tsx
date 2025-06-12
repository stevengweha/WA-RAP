import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function BottomTabBar() {
  return (
    <View style={styles.tabBar}>
      <Ionicons name="home" size={28} color="#205C3B" />
      <Ionicons name="search" size={28} color="#205C3B" />
      <Ionicons name="briefcase" size={28} color="#205C3B" />
      <Ionicons name="person" size={28} color="#205C3B" />
    </View>
  );
}

const styles = StyleSheet.create({
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
