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
    { label: GENDERS.MALE, value: GENDERS.MALE },
    { label: GENDERS.FEMALE, value: GENDERS.FEMALE },
  ];

  const [openList, setOpenList] = useState(false);

  return (
    <TouchableOpacity disabled={true} style={userModalStyles.container}>
      <View style={userModalStyles.modal}>
        <View style={userModalStyles.header}>
          <Text_uk
            textValue={
              previusScreen === PREVIUS_SCREEN.EDIT ? MODAL.EDIT : MODAL.ADD
            }
            textValue2={MODAL.USER}
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
        <View style={userModalStyles.saveBtn}>
          <CustomBtn_uk handleFunc={handleSave} textValue={MODAL.SAVE} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserModal;
