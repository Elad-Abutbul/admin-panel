import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput } from "react-native";
import { Modal } from "react-native";
import UserModal from "../components/UserModal";
const Header = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, styles.text]}>Admin Panel😎</Text>
      </View>
      <View style={styles.elementContainer}>
        <TextInput
          placeholder="Search By Name.."
          placeholderTextColor="white"
          style={styles.inp}
        />
        <Button
          title="Add User"
          style={styles.text}
          onPress={() => setShowModal(true)}
        />
      </View>
      <View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <UserModal setShowModal={setShowModal} previusScreen="add"/>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#1b2223",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  titleContainer: {
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    color: "white",
  },
  text: {
    color: "white",
  },
  elementContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  inp: {
    backgroundColor: "#3a4f50",
    padding: 10,
    borderRadius: 50,
  },
});

export default Header;
