import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { deleteBook } from "./BookSlice";

const BookView = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="my-10">
      <h3 className="text-center text-2xl font-bold">List of Books</h3>
      <table className="w-[50%] mx-auto mt-4">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Author name</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={uuidv4()}>
                  <td className="border text-center p-2">{title}</td>
                  <td className="border text-center p-2">{author}</td>
                  <td className="border text-center p-2">
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button className="mx-2 border px-2 rounded-md shadow-md">Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(id);
                      }}
                      className="mx-2 border px-2 rounded-md shadow-md"
                    >
                      Delete
                    </button>
                  </td>
                  <td></td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BookView;
