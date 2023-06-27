import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
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
const styles = StyleSheet.create({
  // container: { height: HEIGHT - 140 },
});
export default UsersFlatList;
