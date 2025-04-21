import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchSliceStatus from "./fetchStatus";
import bagSlice from "./bagSlice";

const designerStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchSliceStatus.reducer,
    bagItem: bagSlice.reducer,
  },
});

export default designerStore;