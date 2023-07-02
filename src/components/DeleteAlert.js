import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/features/userSlice";
import { DELETE } from "../constants/DeleteAlert";
const DeleteAlert = ({ setShowAlert, name }) => {
  const dispatch = useDispatch();
  const handlePress = (text) => {
    setShowAlert(false);
    if (text === DELETE.DELETE) {
      return dispatch(deleteUser(name));
    }
  };
  return (
    <View style={styles.container}>
      <Text>{DELETE.ARE_YOU_SURE}</Text>
      <View style={styles.content}>
        <Button title={DELETE.YES} onPress={() => handlePress(DELETE.DELETE)} />
        <Button title={DELETE.NO} onPress={handlePress} />
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
