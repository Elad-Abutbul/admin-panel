import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, SafeAreaView } from "react-native";
import AdminPanel from "./src/screens/AdminPanel";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import Header from "./src/screens/Header";
import { useState } from "react";

export default function App() {
  const [witchSort, setWitchSort] = useState("Default");
  const [searchInp, setSearchInp] = useState("");
  const handleSort = (sortText) => {
    setWitchSort(sortText);
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header
          handleSort={handleSort}
          witchSort={witchSort}
          setSearchInp={setSearchInp}
          searchInp={searchInp}
        />
        <AdminPanel witchSort={witchSort} searchInp={searchInp} />
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
