import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddBook from "../Pages/Features/AddBook";
import EditBook from "../Pages/Features/EditBook";
import Home from "../Pages/Home";
import Error from "../Pages/Shared/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/edit-book",
        element: <EditBook />,
      },
    ],
  },
]);

// export default router;
