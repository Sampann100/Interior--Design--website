<<<<<<< HEAD
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
=======
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
>>>>>>> 187e5ac (termperory work)
