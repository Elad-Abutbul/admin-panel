import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/features/userSlice";
import { DELETE } from "../constants/DeleteAlert";
import { deleteAlertStyles } from "../styles/deleteAlertStyles";
const DeleteAlert = ({ setShowAlert, name }) => {
  const dispatch = useDispatch();
  const handlePress = (text) => {
    setShowAlert(false);
    if (text === DELETE.DELETE) {
      return dispatch(deleteUser(name));
    }
  };
  return (
    <View style={deleteAlertStyles.container}>
      <Text  style={deleteAlertStyles.text}>{DELETE.ARE_YOU_SURE}</Text>
      <View style={deleteAlertStyles.content}>
        <Button title={DELETE.YES} onPress={() => handlePress(DELETE.DELETE)} />
        <Button title={DELETE.NO} onPress={handlePress} />
      </View>
    </View>
  );
};

export default DeleteAlert;
