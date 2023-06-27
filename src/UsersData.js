import axios from "axios";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/features/userSlice";
export const getUserData = async () => {
  const dispatch = useDispatch();
  const res = await axios.get("https://randomuser.me/api/?results=10");
  dispatch(getUsers(res.data));
};
