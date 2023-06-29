import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "react-native";
import { Modal } from "react-native";
import UserModal from "../components/UserModal";
import CheckBox from "react-native-check-box";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { usersFilterAtoZ } from "../redux/features/userSlice";
const Header = ({ handleSort, witchSort, setSearchInp, searchInp }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showSort, setShowSort] = useState(false);
  useEffect(() => {
  console.log(showModal);
})
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, styles.text]}>Admin Panel😎</Text>
      </View>
      <View style={styles.elementContainer}>
        <View>
          <View style={styles.searchContainer}>
            {showSort ? (
              <View style={styles.checkBoxContainer}>
                <View style={styles.itemCheckBox}>
                  <CheckBox
                    isChecked={witchSort === "a-z"}
                    onClick={() => {
                      handleSort("a-z");
                      dispatch(usersFilterAtoZ());
                    }}
                    checkBoxColor="white"
                    checkedCheckBoxColor="green"
                  />
                  <Text style={styles.text}>A-Z</Text>
                </View>
                <View style={styles.itemCheckBox}>
                  <CheckBox
                    isChecked={witchSort === "email"}
                    onClick={() => handleSort("email")}
                    checkBoxColor="white"
                    checkedCheckBoxColor="green"
                  />
                  <Text style={styles.text}>Email</Text>
                </View>
                <View style={styles.itemCheckBox}>
                  <CheckBox
                    isChecked={witchSort === "Default"}
                    onClick={() => handleSort("Default")}
                    checkBoxColor="white"
                    checkedCheckBoxColor="green"
                  />
                  <Text style={styles.text}>Default</Text>
                </View>
              </View>
            ) : (
              <TextInput
                placeholder={
                  witchSort === "email"
                    ? "Search By Email.."
                    : "Search By Name.."
                }
                placeholderTextColor="white"
                style={styles.inp}
                value={searchInp}
                onChange={(event) => setSearchInp(event.nativeEvent.text)}
              />
            )}
            <TouchableOpacity onPress={() => setShowSort(!showSort)}>
              <FontAwesome name="sort" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity >
          <Button title="Add User" style={styles.text} onPress={() => setShowModal(true)}/>
        </TouchableOpacity>
      </View>
      <View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <UserModal setShowModal={setShowModal} previusScreen="add" />
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "center",
    flex: 1.5,
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
    marginTop: 10,
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
  checkBoxContainer: {
    flexDirection: "row",
    gap: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  itemCheckBox: {
    alignItems: "center",
  },
});

export default Header;
