import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, SafeAreaView } from "react-native";
import AdminPanel from "./src/screens/AdminPanel";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import Header from "./src/screens/Header";
import { useEffect, useState } from "react";
import { getJsonUserData } from "./src/UsersData";
export default function App() {
  const url = "https://randomuser.me/api/?results=10";
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaView>
          <Header />
          <AdminPanel />
        </SafeAreaView>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9999",
  },
});
