import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  TextInput_uk,
  Text_uk,
  DropDownList_uk,
} from "../../ui-kit/regular/index";
import { Ionicons } from "@expo/vector-icons";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../../redux/features/userSlice";
import ViewContent from "./comps/ViewContent";
const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;
const UserModal = ({ user, setShowModal, previusScreen }) => {
  const whichGender = () => {
    if (user) {
      if (user.gender == "male") return "Mr";
      return "Ms";
    }
  };
  const genders = [
    { label: "Mr", value: "Mr" },
    { label: "Ms", value: "Ms" },
  ];
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user ? user.firstName : "");
  const [lastName, setLastName] = useState(user ? user.lastName : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [openList, setOpenList] = useState(false);
  const [gender, setGender] = useState(user ? whichGender() : "");
  const [picture, setPicture] = useState(user ? user.picture : "");
  const [country, setCountry] = useState(user ? user.country : "");
  const [city, setCity] = useState(user ? user.city : "");
  const [street, setStreet] = useState(user ? user.street : "");

  const userData = {
    gender,
    firstName,
    lastName,
    email,
    picture,
    country,
    city,
    street,
    id: previusScreen === "add" ? uuidv4() : user.id,
  };
  const handleSave = () => {
    if (!firstName || !lastName || !email || !gender || !picture) {
      Alert.alert("OOps", "Field Are Missing", [{ text: "Uderstood" }]);
    } else if (previusScreen === "add") {
      dispatch(addUser(userData));
    } else {
      dispatch(editUser({ id: user.id, editUserObj: userData }));
    }
    return exit();
  };
  const exit = () => {
    setShowModal(false);
  };
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text_uk
            textValue={previusScreen === "edit" ? "Edit" : "Add"}
            textValue2={"User"}
          />
          <View style={styles.exit}>
            <Ionicons
              name="exit-sharp"
              size={24}
              color="white"
              onPress={exit}
            />
          </View>
        </View>
        <View style={styles.content}>
          <ScrollView>
            <DropDownList_uk
              data={genders}
              setOpenList={setOpenList}
              openList={openList}
              stateValue={gender}
              stateFunction={setGender}
              textPlaceHolder="Select title"
            />
            <ViewContent stateFunction={setFirstName} stateValue={firstName} textValue={"Enter first name.."}/>
            <ViewContent stateFunction={setLastName} stateValue={lastName} textValue={"Enter last name.."}/>
            <ViewContent stateFunction={setEmail} stateValue={email} textValue={"Enter email.."}/>
            <ViewContent stateFunction={setPicture} stateValue={picture} textValue={"Enter picture.."}/>
            <ViewContent stateFunction={setCountry} stateValue={country} textValue={"Enter country.."}/>
            <ViewContent stateFunction={setCity} stateValue={city} textValue={"Enter City"}/>
            <ViewContent stateFunction={setStreet} stateValue={street} textValue={"Enter street.."}/>
          </ScrollView>
        </View>
        <View style={styles.saveBtn}>
          <TouchableOpacity>
            <Text onPress={handleSave} style={{ color: "white" }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: HEIGHT - 200,
    width: WIDTH - 80,
    backgroundColor: "#3a4f50",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#1b2223",
    marginVertical: 20,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    gap: WIDTH - 200,
  },
  exit: {
    alignSelf: "flex-end",
  },
  saveBtn: {
    backgroundColor: "darkblue",
    padding: 7,
    marginBottom: 20,
    borderRadius: 50,
  },
});
export default UserModal;
