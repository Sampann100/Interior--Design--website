import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      return action.payload;
    },
    removeFromBag: (state, action) => {
      const idToRemove = action.payload;
      const itemArray = JSON.parse(JSON.stringify(state));
      return state.filter((item) => item.itemId._id !== idToRemove);
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
