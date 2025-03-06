import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchSliceStatus from "./fetchStatus";

const designerStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchSliceStatus.reducer,
  },
});

export default designerStore;
