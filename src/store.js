import { configureStore, createSlice } from "@reduxjs/toolkit";

const menuClickerSlice = createSlice({
  name: "menuClick",
  initialState: false,
  reducers: {
    change: (state) => {
      return !state;
    },
    makeFalse: () => {
      return false;
    },
  },
});

const contSlice = createSlice({
  name: "contClick",
  initialState: true,
  reducers: {
    change: (state) => {
      return !state;
    },
  },
});

const projSlice = createSlice({
  name: "projClick",
  initialState: false,
  reducers: {
    change: (state) => {
      return !state;
    },
  },
});

export const menuClickerAction = menuClickerSlice.actions;
export const contAction = contSlice.actions;
export const projAction = projSlice.actions;

const store = configureStore({
  reducer: {
    menuClick: menuClickerSlice.reducer,
    contClick: contSlice.reducer,
    projClick: projSlice.reducer,
  },
});

export default store;
