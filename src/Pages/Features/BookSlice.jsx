import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooksState = {
  books: [
    { id: uuidv4(), title: "Love Bangladesh", author: "Jobayer" },
    { id: uuidv4(), title: "Love India", author: "Ahmed" },
    { id: uuidv4(), title: "Beautiful BD", author: "Tahmina" },
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
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isExisted = state.books.filter((book) => book.id === id);
      if (isExisted) {
        isExisted[0].title = title;
        isExisted[0].author = author;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
