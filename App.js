import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import AdminPanel from "./src/screens/AdminPanel";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import Header from "./src/screens/Header";
import { useState } from "react";
import { FILTER_SORT } from "./src/constants/FilterAndSort";
import { contextApi } from "./src/contextApi";
export default function App() {
  const [witchFilter, setwitchFilter] = useState(FILTER_SORT.NAME);
  const [searchInp, setSearchInp] = useState("");
  const [if_A_to_Z_on, setIf_A_to_Z_on] = useState(false);
  const handleSort = (sortText) => {
    setwitchFilter(sortText);
  };
  return (
    <Provider store={store}>
      <contextApi.Provider value={{handleSort,witchFilter,setSearchInp,searchInp,if_A_to_Z_on,setIf_A_to_Z_on}}>
        <SafeAreaView style={styles.container}>
          <Header/>
          <AdminPanel/>
        </SafeAreaView>
        <StatusBar hidden />
      </contextApi.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b2223",
  },
});
