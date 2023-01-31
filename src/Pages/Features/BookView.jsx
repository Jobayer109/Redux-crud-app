import React from "react";
import { useSelector } from "react-redux";

const BookView = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <div className="my-10">
      <h3 className="text-center text-2xl font-bold">List of Books</h3>
      <table className="w-[50%] mx-auto mt-4">
        <thead>
          <tr>
            <th className="border p-2">Id</th>
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
                <tr key={id}>
                  <td className="border text-center p-2">{id}</td>
                  <td className="border text-center p-2">{title}</td>
                  <td className="border text-center p-2">{author}</td>
                  <td className="border text-center p-2">
                    <button className="mx-2 border px-2 rounded-md shadow-md">Edit</button>
                    <button className="mx-2 border px-2 rounded-md shadow-md">Delete</button>
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
