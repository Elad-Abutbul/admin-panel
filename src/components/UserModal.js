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
import { Ionicons } from "@expo/vector-icons";
import { TextInput_uk } from "../ui-kit/regular/TextInput_uk";
import { Text_uk } from "../ui-kit/regular/Text_uk";
import React, { useState } from "react";
import DropDownList from "react-native-dropdown-picker";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../redux/features/userSlice";
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
    id: previusScreen === "add" ? 1 : user.id,
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
          <Text_uk textValue={previusScreen === "edit" ? "Edit" : "Add"} />
          {/* <Text>{previusScreen === "edit" ? "Edit" : "Add"} User</Text> */}
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
              <Text_uk textValue={"Enter first name.."} />
              <TextInput
                style={styles.input}
                onChange={(event) => setFirstName(event.nativeEvent.text)}
                value={firstName}
              />
            </View>
            <View>
              <Text_uk textValue={"Enterlast name.."} />
              <TextInput
                style={styles.input}
                onChange={(event) => setLastName(event.nativeEvent.text)}
                value={lastName}
              />
            </View>
            <View>
              <Text_uk textValue={"Enter email.."} />
              <TextInput
                style={styles.input}
                onChange={(event) => setEmail(event.nativeEvent.text)}
                value={email}
              />
            </View>
            <View>
              <Text_uk textValue={"Enter picture.."} />
              <TextInput
                style={styles.input}
                onChange={(event) => setPicture(event.nativeEvent.text)}
                value={picture}
              />
            </View>
            <View>
              <Text_uk textValue={"Enter country.."} />
              <TextInput
                style={styles.input}
                onChange={(event) => setCountry(event.nativeEvent.text)}
                value={country}
              />
            </View>
            <View>
              <Text_uk textValue={"Enter city.."} style={styles.text} />
              <TextInput
                style={styles.input}
                onChange={(event) => setCity(event.nativeEvent.text)}
                value={city}
              />
            </View>
            <View>
              <Text_uk textValue={"Enter street.."} />
              <TextInput
                style={styles.input}
                onChange={(event) => setStreet(event.nativeEvent.text)}
                value={street}
              />
            </View>
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
  text: {
    color: "white",
  },
});
export default UserModal;
