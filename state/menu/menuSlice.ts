import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
}

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isOpen = !state.isOpen; // Mutate the property directly
    },
  },
});

export default menuSlice.reducer
export const {toggleMenu} = menuSlice.actions