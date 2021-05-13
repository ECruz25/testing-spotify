import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myLibrary: [],
};

export const dashboardSlice = createSlice({
  name: "My Library",
  initialState,
  reducers: {
    addSong: (state, { song }) => {
      state.myLibrary.push(song);
    },
  },
});

export const { addSong } = dashboardSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMyLibrary = (state) => state.counter.myLibrary;

export default dashboardSlice.reducer;
