import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/features/userSlice";
const DeleteAlert = ({ setShowAlert, name }) => {
  const dispatch = useDispatch();
  const handlePress = (text) => {
    setShowAlert(false);
    if (text === "delete") {
      return dispatch(deleteUser(name));
    }
  };
  return (
    <View style={styles.container}>
      <Text>ARE YOU SURE?</Text>
      <View style={styles.content}>
        <Button title="Yes" onPress={() => handlePress("delete")} />
        <Button title="No" onPress={handlePress} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 100,
  },
  
});
export default DeleteAlert;
