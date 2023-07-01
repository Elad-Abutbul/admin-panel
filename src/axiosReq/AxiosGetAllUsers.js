import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { getUsers } from "../redux/features/userSlice";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
export default usersData = () => {
  const dispatch = useDispatch();
  const getAllUsers= async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=10");
      const usersDataFilter = res.data.results.map((user) => {
        return {
          fullName: `${user.name.first}  ${user.name.last}`,
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
          id: uuidv4(),
        };
      });
      dispatch(getUsers(usersDataFilter));
    } catch (error) {
      Alert.alert("OOps", "Something went wrong", [
        { text: "try again later" },
      ]);
    }
  };
  return { getAllUsers };
};
