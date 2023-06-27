import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.value = action.payload;
    },
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
    },
  },
});

// Action creators are generated for each case reducer function
export const { delteUser, addUser, editUser, getUsers } = counterSlice.actions;

export default counterSlice.reducer;
