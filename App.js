import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, SafeAreaView } from "react-native";
import AdminPanel from "./src/screens/AdminPanel";
import { store } from "./src/redux/store";
import { Provider, useSelector } from "react-redux";
import Header from "./src/screens/Header";
import { useEffect, useState } from "react";
import { getJsonUserData, getUserData } from "./src/UsersData";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUsers } from "./src/redux/features/userSlice";

export default function App() {
  const url = "https://randomuser.me/api/?results=10";
  const [witchSort, setWitchSort] = useState("All");
  const handleSort = (sortText) => {
    setWitchSort(sortText);
    console.log(witchSort);
  };
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header handleSort={handleSort} witchSort={witchSort} />
        <AdminPanel witchSort={witchSort} />
      </SafeAreaView>
      <StatusBar hidden />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b2223",
  },
});
