import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BookSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const bookId = useSelector((state) => state.bookReducer.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = { id: bookId + 1, title, author };
    dispatch(addBook(book));
    navigate("/books", { replace: true });
  };

  return (
    <div className="mt-8">
      <h3 className="text-center text-2xl font-bold">Add Book</h3>
      <form onSubmit={handleSubmit} className="w-[50%] mx-auto my-12">
        <div className="flex items-center justify-center ">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border ml-2 rounded-md p-1 outline-none"
            />
          </div>
          <div>
            <label htmlFor="author" className="ml-4">
              Author:
            </label>
            <input
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border ml-2 rounded-md p-1 outline-none"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="border mt-4 px-4 py-1 rounded-sm font-semibold shadow-md hover:bg-gray-400 hover:text-white"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
