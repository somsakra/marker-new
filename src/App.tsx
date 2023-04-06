import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hook";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Test from "./pages/Test";

import "./App.scss";

const userRouter = createBrowserRouter([
  {
    path: "*",
    element: <Main />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

const router = createBrowserRouter([
  {
    path: "*",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  return (
    <div>
      {localStorage.getItem("token") ? (
        <RouterProvider router={userRouter} />
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
};

export default App;
