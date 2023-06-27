import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addModal } from "../redux/features/witchModalSlice";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const Header = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Admin Panel😎</Text>
      <Button title="Add User" onPress={() => dispatch(addModal("add"))} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textHeader: {
    fontSize: 20,
  },
  modelView: {
    height: HEIGHT - 40,
  },
});

export default Header;
