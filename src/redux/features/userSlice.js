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
    deleteUser: (state, action) => {
      state.value = state.value.filter(
        (user) => user.name.first !== action.payload
      );
    },
    addUser: (state, action) => {
      state.value.unshift(action.payload);
    },
    editUser: (state, action) => {
      const { id, editUserObj } = action.payload;
      const userIndex = state.value.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.value[userIndex] = editUserObj;
      }
    },
    usersFilterAtoZ: (state) => {
      const filterarr = state.value.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
      return filterarr
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteUser, addUser, editUser, getUsers, usersFilterAtoZ } =
  counterSlice.actions;

export default counterSlice.reducer;
