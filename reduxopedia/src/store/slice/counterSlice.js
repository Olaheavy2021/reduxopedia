import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOpedia } from "../action/action.js";

const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    //here we will define all actions related to the slice
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    decrementMultiplier: (state, action) => {
      state.count -= Number(action.payload);
    },
    resetCounter: (state) => {
      state.count = 10;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOpedia, (state, action) => {
      state.count = 10;
    });
  },
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  resetCounter,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
