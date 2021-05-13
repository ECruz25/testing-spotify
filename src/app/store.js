import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashbaordSlice";

export const store = configureStore({
  reducer: {
    myLibrary: dashboardReducer,
  },
});
