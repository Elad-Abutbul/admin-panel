import { View, FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import usersData from "../axiosReq/AxiosGetAllUsers";
import { searchName, searchEmail, sort_a_to_z } from "../filterAndSortUsers";
import { FILTER_SORT } from "../constants/FilterAndSort";
const AdminPanel = ({ witchSort, searchInp, if_A_to_Z_on }) => {
  const users = useSelector((state) => state.users.value);
  const { getAllUsers } = usersData();
  const handleSearch = () => {
    if (searchInp !== "") {
      if (witchSort === FILTER_SORT.NAME) {
        return searchName(searchInp, users);
      } else {
        return searchEmail(searchInp, users);
      }
    } else if (if_A_to_Z_on) {
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
