import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React, { useEffect, useState } from "react";
import DropDownList from "react-native-dropdown-picker";
import { useDispatch, useSelector } from "react-redux";
import { removeModal } from "../redux/features/witchModalSlice";
import { addUser, editUser } from "../redux/features/userSlice";
const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;
const UserModal = ({ user, setShowModal }) => {
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
  const witchModal = useSelector((state) => state.witchModal.value);
  const dispatch = useDispatch();
  const [name, setName] = useState(user ? user.name.first : "");
  const [lastName, setLastName] = useState(user ? user.name.last : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [openList, setOpenList] = useState(false);
  const [gender, setGender] = useState(user ? whichGender() : "");
  const [picture, setPicture] = useState(user ? user.picture.large : "");
  const [country, setCountry] = useState(user ? user.location.country : "");
  const [city, setCity] = useState(user ? user.location.city : "");
  const [street, setStreet] = useState(user ? user.location.street.name : "");

  const data = {
    gender,
    name,
    lastName,
    email,
    picture,
    country,
    city,
    street,
  };
  console.log(name);
  const handleSave = () => {
    if (!name || !lastName || !email || !gender || !picture) {
      Alert.alert("OOps", "Field Are Missing", [{ text: "Uderstood" }]);
    } else if (witchModal === "add") {
      dispatch(addUser(data));
    } else {
      dispatch(editUser(data));
    }
    return exit();
  };
  const exit = () => {
    dispatch(removeModal());
    setShowModal(false);
  };
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text>{witchModal === "edit" ? "Edit" : "Add"} User</Text>
          <View style={styles.exit}>
            <Ionicons
              name="exit-sharp"
              size={24}
              color="black"
              onPress={exit}
            />
          </View>
        </View>

        <View style={styles.content}>
          <ScrollView>
            <DropDownList
              setOpen={() => setOpenList(!openList)}
              open={openList}
              items={genders}
              value={gender}
              setValue={(val) => setGender(val)}
              placeholder="Select Title"
              multiple={false}
              style={styles.input}
            />
            <View>
              <Text>Enter First Name..</Text>
              <TextInput
                style={styles.input}
                onChange={(text) => setName(text)}
                value={name}
              />
            </View>
            <View>
              <Text>Enter Last Name..</Text>
              <TextInput
                style={styles.input}
                onChange={(text) => setLastName(text)}
                value={lastName}
              />
            </View>
            <View>
              <Text>Enter Email..</Text>
              <TextInput
                style={styles.input}
                onChange={(text) => setEmail(text)}
                value={email}
              />
            </View>
            <View>
              <Text>Enter Picture..</Text>
              <TextInput
                style={styles.input}
                onChange={(text) => setPicture(text)}
                value={picture}
              />
            </View>
            <View>
              <Text>Enter Country..</Text>
              <TextInput
                style={styles.input}
                onChange={(text) => setCountry(text)}
                value={country}
              />
            </View>
            <View>
              <Text>Enter City..</Text>
              <TextInput
                style={styles.input}
                onChange={(text) => setCity(text)}
                value={city}
              />
            </View>
            <View>
              <Text>Enter Street..</Text>
              <TextInput
                style={styles.input}
                onChange={(text) => setStreet(text)}
                value={street}
              />
            </View>
          </ScrollView>
        </View>

        <Button title="save" onPress={handleSave} />
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
    height: HEIGHT - 300,
    width: WIDTH - 80,
    backgroundColor: "white",
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
    backgroundColor: "#333",
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
});
export default UserModal;
