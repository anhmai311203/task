import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="black" />
      </TouchableOpacity>

      {/* Scanning Area */}
      <View style={styles.scanArea}>
        <Image
          source={{ uri: "https://via.placeholder.com/300" }} // Thay ảnh thực tế
          style={styles.productImage}
        />
      </View>

      {/* Product Info */}
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Lauren's Orange Juice</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5E8D9", paddingTop: 40 },
  backButton: { position: "absolute", top: 20, left: 20, zIndex: 10 },
  scanArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: { width: 250, height: 400, resizeMode: "contain" },
  productInfo: {
    padding: 15,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  productName: { fontSize: 20, fontWeight: "bold" },
});

export default ScanScreen;
