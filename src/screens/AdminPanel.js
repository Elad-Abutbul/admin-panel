import { View, FlatList, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { getUsers } from "../redux/features/userSlice";
import axios from "axios";
const AdminPanel = () => {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=10");
      const usersDataFilter = res.data.results.map((user) => {
        // console.log(user.picture.large);
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
          id: user.login.uuid,
        };
      });
      // console.log(usersDataFilter);
      dispatch(getUsers(usersDataFilter));
    };
    data();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
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
