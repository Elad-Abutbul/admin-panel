import { View, FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import usersData from "../axiosReq/AxiosGetAllUsers";
import { searchName, searchEmail, sort_a_to_z } from "../filterAndSortUsers";
import { FILTER_SORT } from "../constants/FilterAndSort";
import { contextApi } from "../contextApi";
const AdminPanel = () => {
  const valContext = useContext(contextApi);
  const users = useSelector((state) => state.users.value);
  const { getAllUsers } = usersData();
  const handleSearch = () => {
    if (valContext.searchInp !== "") {
      if (valContext.witchSort === FILTER_SORT.NAME) {
        return searchName(valContext.searchInp, users);
      } else {
        return searchEmail(valContext.searchInp, users);
      }
    } else if (valContext.if_A_to_Z_on) {
      return sort_a_to_z(users);
    } else {
      return users;
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <View style={styles.container}>
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
