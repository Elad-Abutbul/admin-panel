import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../../UsersData";

const initialState = {
  value: UsersData,
};

export const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    delteUser: (state, action) => {
      state.value = state.value.filter(
        (user) => user.name.first !== action.payload
      );
    },
    addUser: (state, action) => {
      state.unshift(action.payload);
    },
    editUser: (state, action) => {
      const obj = state.value.find(
        (user) => user.name.first === action.payload
      );
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { delteUser, addUser, editUser } = counterSlice.actions;

export default counterSlice.reducer;
