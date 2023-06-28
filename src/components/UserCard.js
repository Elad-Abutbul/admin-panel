import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import DeleteAlert from "./DeleteAlert";
import UserModal from "./UserModal";
const UserCard = ({ user }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  const genderStyling = () => {
    if (user.gender === "male") {
      return styles.male;
    }
    return styles.female;
  };
  return (
    <View style={styles.container}>
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
        <View style={[styles.content, genderStyling()]}>
          {showAlert ? (
            <DeleteAlert setShowAlert={setShowAlert} name={user.firstName} />
          ) : (
            <>
              <Image
                style={styles.image}
                source={{ uri: user.picture }}
              />
              <Text style={styles.text}>{user.firstName}</Text>
              <Text style={styles.text}>{user.lastName}</Text>
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
          previusScreen="edit"
        />
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
    gap: 15,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#3a4f50",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  text: {
    color: "white",
  },
  male: {
    borderColor: "lightblue",
    borderWidth: 1,
  },
  female: {
    borderColor: "pink",
    borderWidth: 1,
  },
});
export default UserCard;
