import { View, FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import usersData from "../axiosReq/AxiosGetAllUsers";
import { searchName, searchEmail, sort_a_to_z } from "../adminPanelFunction/filterAndSortUsers";
import { contextApi } from "../contextApi";
import { adminPanelStyles } from "../styles/adminPanelStyles";
const AdminPanel = () => {
  const users = useSelector((state) => state.users.value);
  const { getAllUsers } = usersData();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <View style={adminPanelStyles.container}>
      <FlatList
        data={handleSearch()}
        renderItem={(user) => <UserCard user={user.item} />}
        keyExtractor={(user) => user.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 8,
  },
});
export default AdminPanel;
