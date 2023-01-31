import { createSlice } from "@reduxjs/toolkit";

const initialBooksState = [
  { id: 1, title: "Love Bangladesh", author: "Jobayer" },
  { id: 2, title: "Love India", author: "Ahmed" },
  { id: 3, title: "Beautiful BD", author: "Tahmina" },
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
