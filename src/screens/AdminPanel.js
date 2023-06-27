import { View } from "react-native";
import React from "react";
import UserFlatList from "../components/UsersFlatList";
const AdminPanel = ({ setShowModel, showModel }) => {
  return (
    <View>
      <UserFlatList />
    </View>
  );
};

export default AdminPanel;
