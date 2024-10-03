import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./component/Root";
import Form from "./component/Form";
import Teacher from "./component/Teacher";
import Student from "./component/Student";
import ChangeRoutine from "./component/ChangeRoutine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Form></Form>
      },
      {
        path:"/teachersRoutine",
        element:<Teacher></Teacher>
      },
      {
        path:"/studentsRoutine",
        element:<Student></Student>
      },
      {
        path:"/changeRoutine",
        element:<ChangeRoutine></ChangeRoutine>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);