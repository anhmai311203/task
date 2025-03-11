import React from "react";
import { StatusBar } from "expo-status-bar";
import TabNavigator from "./screens/TabNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <TabNavigator />
    </>
  );
}
