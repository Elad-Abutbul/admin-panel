import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const witchModalSlice = createSlice({
  name: "witchModal",
  initialState,
  reducers: {
    selectModal: (state, action) => {
      state.value = action.payload;
    },
    removeModal: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectModal, removeModal } = witchModalSlice.actions;

export default witchModalSlice.reducer;
