import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DropDown =
  | "product"
  | "solutions"
  | "resources"
  | "pricing"
  | undefined;

const initialState: {
  isOpen: boolean;
  dropDown: {
    product: DropDown;
    solutions: DropDown;
    resources: DropDown;
    pricing: DropDown;
  };
} = {
  isOpen: false,
  dropDown: {
    product: undefined,
    solutions: undefined,
    resources: undefined,
    pricing: undefined,
  },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isOpen = !state.isOpen;
    },
    toggleDropdown(state, action: PayloadAction<DropDown>) {
      if (action.payload === "product")
        state.dropDown = { ...initialState.dropDown, product: "product" };
      if (action.payload === "solutions")
        state.dropDown = { ...initialState.dropDown, solutions: "solutions" };
      if (action.payload === "resources")
        state.dropDown = { ...initialState.dropDown, resources: "resources" };
      if (action.payload === "pricing")
        state.dropDown = { ...initialState.dropDown, pricing: "pricing" };
      if (action.payload === undefined) state.dropDown = initialState.dropDown;
    },
  },
});

export default menuSlice.reducer;
export const { toggleMenu, toggleDropdown } = menuSlice.actions;
