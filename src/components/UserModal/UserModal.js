import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text_uk, DropDownList_uk } from "../../ui-kit/regular/index";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { CustomBtn_uk } from "../../ui-kit/FormModal";
import ModalItem from "./ModalItem";
import { GENDERS } from "../../constants/Genders";
import { PREVIUS_SCREEN } from "../../constants/Preivus_screens";
import { MODAL } from "../../constants/Modal";
import useModal from "../../hooks/UserModal";
import { userModalStyles } from "../../styles/userModalStyles";

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
    { label: GENDERS.MR, value: GENDERS.MALE },
    { label: GENDERS.MS, value: GENDERS.FEMALE },
  ];

  const [openList, setOpenList] = useState(false);

  return (
    <TouchableOpacity disabled={true} style={userModalStyles.container}>
      <View style={userModalStyles.modal}>
        <View style={userModalStyles.header}>
          <Text_uk
            textValue={
              previusScreen === PREVIUS_SCREEN.EDIT
                ? MODAL.EDIT_USER
                : MODAL.ADD_USER
            }
          />
          <View style={userModalStyles.exit}>
            <Ionicons
              name="exit-sharp"
              size={24}
              color="white"
              onPress={exit}
            />
          </View>
        </View>
        <View style={userModalStyles.content}>
          <ScrollView>
            <DropDownList_uk
              data={genders}
              setOpenList={setOpenList}
              openList={openList}
              stateValue={gender}
              stateFunction={setGender}
              textPlaceHolder={MODAL.SELECT_TITLE}
            />
            <ModalItem
              stateFunction={setFirstName}
              stateValue={firstName}
              textValue={MODAL.ENTER.FIRST_NAME}
            />
            <ModalItem
              stateFunction={setLastName}
              stateValue={lastName}
              textValue={MODAL.ENTER.LAST_NAME}
            />
            <ModalItem
              stateFunction={setEmail}
              stateValue={email}
              textValue={MODAL.ENTER.EMAIL}
            />
            <ModalItem
              stateFunction={setPicture}
              stateValue={picture}
              textValue={MODAL.ENTER.PICTURE}
            />
            <ModalItem
              stateFunction={setCountry}
              stateValue={country}
              textValue={MODAL.ENTER.COUNTRY}
            />
            <ModalItem
              stateFunction={setCity}
              stateValue={city}
              textValue={MODAL.ENTER.CITY}
            />
            <ModalItem
              stateFunction={setStreet}
              stateValue={street}
              textValue={MODAL.ENTER.STREET}
            />
          </ScrollView>
        </View>
        <View style={userModalStyles.saveBtn}>
          <CustomBtn_uk handleFunc={handleSave} textValue={MODAL.SAVE} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserModal;
