import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text_uk, DropDownList_uk } from "../../ui-kit/regular/index";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { CustomBtn_uk } from "../../ui-kit/FormModal";
import ViewContent from "./comps/ViewContent";
import { GENDERS } from "../../constants/Genders";
import { PREVIUS_SCREEN } from "../../constants/Preivus_screens";
import { MODAL } from "../../constants/Modal";
import useModal from "../../customHooks/UserModal";
const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;
const UserModal = ({ user, setShowModal, previusScreen }) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    picture,
    setPicture,
    gender,
    setGender,
    country,
    setCountry,
    city,
    setCity,
    street,
    setStreet,
    handleSave,
    exit,
  } = useModal(user, setShowModal, previusScreen);
  const genders = [
    { label: GENDERS.MALE, value: GENDERS.MALE },
    { label: GENDERS.FEMALE, value: GENDERS.FEMALE },
  ];

  const [openList, setOpenList] = useState(false);

  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text_uk
            textValue={
              previusScreen === PREVIUS_SCREEN.EDIT ? MODAL.EDIT : MODAL.ADD
            }
            textValue2={MODAL.USER}
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
              textPlaceHolder={MODAL.SELECT_TITLE}
            />
            <ViewContent
              stateFunction={setFirstName}
              stateValue={firstName}
              textValue={MODAL.ENTER.FIRST_NAME}
            />
            <ViewContent
              stateFunction={setLastName}
              stateValue={lastName}
              textValue={MODAL.ENTER.LAST_NAME}
            />
            <ViewContent
              stateFunction={setEmail}
              stateValue={email}
              textValue={MODAL.ENTER.EMAIL}
            />
            <ViewContent
              stateFunction={setPicture}
              stateValue={picture}
              textValue={MODAL.ENTER.PICTURE}
            />
            <ViewContent
              stateFunction={setCountry}
              stateValue={country}
              textValue={MODAL.ENTER.COUNTRY}
            />
            <ViewContent
              stateFunction={setCity}
              stateValue={city}
              textValue={MODAL.ENTER.CITY}
            />
            <ViewContent
              stateFunction={setStreet}
              stateValue={street}
              textValue={MODAL.ENTER.STREET}
            />
          </ScrollView>
        </View>
        <View style={styles.saveBtn}>
          <CustomBtn_uk handleFunc={handleSave} textValue={MODAL.SAVE} />
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
    gap: 70,
    padding: 10,
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
