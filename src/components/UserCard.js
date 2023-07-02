import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import DeleteAlert from "./DeleteAlert";
import UserModal from "../components/UserModal/UserModal";
import { GENDERS } from "../constants/Genders";
import { PREVIUS_SCREEN } from "../constants/Preivus_screens";
import { userCartStyles } from "../styles/userCardStyles";
const UserCard = ({ user }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  const genderStyling = () => {
    if (user.gender === GENDERS.MALE) {
      return userCartStyles.male;
    }
    return userCartStyles.female;
  };
  return (
    <View style={userCartStyles.container}>
      <View>
        <TouchableOpacity>
          <MaterialIcons
            name="delete"
            size={30}
            color={"red"}
            onLongPress={() => setShowAlert(true)}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ flex: 1 }} onPress={handleModal}>
        <View style={[userCartStyles.content, genderStyling()]}>
          {showAlert ? (
            <DeleteAlert setShowAlert={setShowAlert} name={user.firstName} />
          ) : (
            <>
              <Image style={userCartStyles.image} source={{ uri: user.picture }} />
              <Text style={userCartStyles.text}>{user.firstName}</Text>
              <Text style={userCartStyles.text}>{user.lastName}</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <UserModal
          user={user}
          setShowModal={setShowModal}
          previusScreen={PREVIUS_SCREEN.EDIT}
        />
      </Modal>
    </View>
  );
};

export default UserCard;
