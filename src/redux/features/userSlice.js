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
      state.value.unshift(action.payload);
    },
    editUser: (state, action) => {
      const { id, editUserObj } = action.payload;
      // console.log(editUserObj);
      const userIndex = state.value.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.value[userIndex] = editUserObj;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { delteUser, addUser, editUser, getUsers } = counterSlice.actions;

export default counterSlice.reducer;
