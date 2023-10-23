import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Pages/Home/HomePage";
import Register from "./components/Pages/User/Register";

const router = createBrowserRouter([
  {
    path : "/",
    element: <HomePage/>,
  },
  {
    path: '/register',
    element: <Register/>
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
