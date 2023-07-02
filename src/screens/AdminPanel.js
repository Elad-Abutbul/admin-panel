import { View, FlatList } from "react-native";
import React, { useEffect } from "react";
import UserCard from "../components/UserCard";
import usersData from "../axiosReq/AxiosGetAllUsers";
import { adminPanelStyles } from "../styles/adminPanelStyles";
import { handleSearch } from "../adminPanelFunction/handleSearchFlatList/HandelSearch";
const AdminPanel = () => {
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
export default AdminPanel;
