import { View, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
const UsersFlatList = () => {
  const users = useSelector((state) => state.users.value);
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={(user) => <UserCard user={user.item} />}
        keyExtractor={(user) => user.login.uuid}
      />
    </View>
  );
};

export default UsersFlatList;
