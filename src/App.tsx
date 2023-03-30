import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
};

export default App;
