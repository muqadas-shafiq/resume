import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  menuOpen: boolean;
}

const initialState: UIState = {
  menuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;
