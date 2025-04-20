<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchFinish: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetctStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
=======
import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchFinish: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetctStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
>>>>>>> 187e5ac (termperory work)
