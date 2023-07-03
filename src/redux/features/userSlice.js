import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.value = action.payload;
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter(
        (user) => user.firstName !== action.payload
      );
    },
    addUser: (state, action) => {
      state.value.unshift(action.payload);
    },
    editUser: (state, action) => {
      const { editUserObj } = action.payload;
      const userIndex = state.value.findIndex(
        (user) => user.id === editUserObj.id
      );
      if (userIndex !== -1) {
        state.value[userIndex] = editUserObj;
      }
    },
    usersFilterAtoZ: (state) => {
      const filterarr = state.value.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
      return filterarr;
    },
  },
});

export const { deleteUser, addUser, editUser, getUsers, usersFilterAtoZ } =
  counterSlice.actions;

export default counterSlice.reducer;
