import { useState } from "react";
import { useDispatch } from "react-redux";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { addUser, editUser } from "../redux/features/userSlice";
import { Alert } from "react-native";
import { PREVIUS_SCREEN } from "../constants/Preivus_screens";

const useModal = (user, setShowModal, previusScreen) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user ? user.firstName : "");
  const [lastName, setLastName] = useState(user ? user.lastName : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [picture, setPicture] = useState(user ? user.picture : "");
  const [country, setCountry] = useState(user ? user.country : "");
  const [gender, setGender] = useState(user ? user.gender : "");
  const [city, setCity] = useState(user ? user.city : "");
  const [street, setStreet] = useState(user ? user.street : "");

  const handleSave = () => {
    const userData = {
      firstName,
      lastName,
      email,
      picture,
      country,
      city,
      street,
      id: user ? user.id : uuidv4(),
    };
    if (!firstName || !lastName || !email || !gender || !picture) {
      Alert.alert("OOps", "Fields Are Missing", [{ text: "Understood" }]);
    } else if (previusScreen === PREVIUS_SCREEN.ADD) {
      dispatch(addUser(userData));
      return exit();
    } else {
      dispatch(editUser({ editUserObj: userData }));
      return exit();
    }
  };

  const exit = () => {
    setShowModal(false);
  };

  return {
    setFirstName,
    firstName,
    setLastName,
    lastName,
    setEmail,
    email,
    setGender,
    gender,
    setPicture,
    picture,
    setCountry,
    country,
    setCity,
    city,
    setStreet,
    street,
    handleSave,
    exit,
  };
};

export default useModal;
