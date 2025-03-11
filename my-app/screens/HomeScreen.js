import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const insights = [
  { id: "1", title: "Scan new", icon: "scan-outline", count: "Scanned 483" },
  { id: "2", title: "Counterfeits", icon: "warning-outline", count: "Counterfeited 32" },
  { id: "3", title: "Success", icon: "checkmark-circle-outline", count: "Checkouts 8" },
  { id: "4", title: "Directory", icon: "book-outline", count: "History 26" },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello 👋</Text>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
          style={styles.avatar}
        />
      </View>

      {/* Insights */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.insightGrid}>
        {insights.map((item) => (
          <TouchableOpacity key={item.id} style={styles.insightCard}>
            <Ionicons name={item.icon} size={28} color="blue" />
            <Text style={styles.insightText}>{item.title}</Text>
            <Text style={styles.countText}>{item.count}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Navigation */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F9F9F9" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  greeting: { fontSize: 22, fontWeight: "bold" },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  sectionTitle: { marginTop: 20, fontSize: 18, fontWeight: "bold" },
  insightGrid: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  insightCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 15,
    margin: "1%",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  insightText: { fontSize: 16, fontWeight: "bold", marginVertical: 5 },
  countText: { fontSize: 14, color: "gray" },
});

export default HomeScreen;
