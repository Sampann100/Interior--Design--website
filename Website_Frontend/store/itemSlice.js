<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialState: (state, action) => {
      return action.payload;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice;
=======
import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialState: (state, action) => {
      return action.payload;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice;
>>>>>>> 187e5ac (termperory work)
