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
import { useDispatch, useSelector } from "react-redux";
import { selectModal } from "../redux/features/witchModalSlice";
const UserCard = ({ user, index }) => {
  const [showAlert, setShowAlert] = useState(false);
  const witchModal = useSelector((state) => state.witchModal.value);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const editUser = witchModal === "edit" ? user : undefined;
  const handleModal = () => {
    dispatch(selectModal("edit"));
    setShowModal(true);
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
        <View style={styles.content}>
          {showAlert ? (
            <DeleteAlert setShowAlert={setShowAlert} name={user.name.first} />
          ) : (
            <>
              <Image
                style={styles.image}
                source={{ uri: user.picture.large }}
              />
              <Text>{user.name.first}</Text>
              <Text>{user.name.last}</Text>
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
        <UserModal user={editUser} setShowModal={setShowModal} />
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
export default UserCard;
