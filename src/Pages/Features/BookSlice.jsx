import { createSlice } from "@reduxjs/toolkit";

const initialBooksState = {
  books: [
    { id: 1, title: "Love Bangladesh", author: "Jobayer" },
    { id: 2, title: "Love India", author: "Ahmed" },
    { id: 3, title: "Beautiful BD", author: "Tahmina" },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialBooksState,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
