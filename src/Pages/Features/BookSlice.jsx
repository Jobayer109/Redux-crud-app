import { createSlice } from "@reduxjs/toolkit";

const initialBooksState = [
  { id: 1, title: "Love Bangladesh", author: "Jobayer" },
  { id: 2, title: "Love India", author: "Ahmed" },
];

const bookSlice = createSlice({
  name: "books",
  initialState: initialBooksState,
  reducers: {
    showBooks: (state) => state,
  },
});

export const { showBooks } = bookSlice.actions;
export default bookSlice.reducer;
