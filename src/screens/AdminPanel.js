import { View, FlatList, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { getUsers } from "../redux/features/userSlice";
import axios from "axios";
const AdminPanel = ({ witchSort, searchInp }) => {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const handleSearch = () => {
    if (searchInp !== "") {
      if (witchSort === "Default" || witchSort === "a-z") {
        const searchFirstName = users.filter((user) =>
          user.firstName.toLowerCase().includes(searchInp.toLowerCase())
        );
        return searchFirstName;
      } else {
        const searchEmail = users.filter((user) =>
          user.email.toLowerCase().includes(searchInp.toLowerCase())
        );
        return searchEmail;
      }
    } else {
      return users;
    }
  };
  useEffect(() => {
    const data = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=10");
      const usersDataFilter = res.data.results.map((user) => {
        return {
          gender: user.gender,
          title: user.name.title,
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
          picture: user.picture.large,
          country: user.location.country,
          city: user.location.city,
          street: user.location.street.name,
          age: user.registered.age,
          id: user.login.uuid,
        };
      });
      dispatch(getUsers(usersDataFilter));
    };
    data();
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
