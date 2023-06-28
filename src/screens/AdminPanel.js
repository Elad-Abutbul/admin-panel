import { View, FlatList, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { getUsers } from "../redux/features/userSlice";
import axios from "axios";
const AdminPanel = ({ witchSort }) => {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
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
  handleData = () => {
    // if (witchSort === "all") {
    //   return users;
    // } else if (witchSort === "gender") {
    //   return usersGender;
    // } else {
    //   return aToz;
    // }
  };
  useEffect(() => {
    console.log(users);
  })
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
