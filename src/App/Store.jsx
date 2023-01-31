import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../Pages/Features/BookSlice";

const store = configureStore({
  reducer: {
    bookReducer: BookReducer,
  },
});

export default store;
