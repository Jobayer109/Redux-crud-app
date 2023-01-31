import React from "react";
import { Link } from "react-router-dom";
import "./Header";

const Header = () => {
  return (
    <div>
      <ul className="flex items-center justify-center bg-sky-700 p-2">
        <li>
          <Link className="mx-2 font-semibold text-white hover:text-yellow-400" to="/">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link className="mx-2 font-semibold text-white hover:text-yellow-400" to="/books">
            Show Books
          </Link>
        </li>
        <li>
          <Link className="mx-2 font-semibold text-white hover:text-yellow-400" to="/add-book">
            Add Book
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
