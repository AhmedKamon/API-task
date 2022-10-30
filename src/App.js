import "./App.css";
import Task from "../src/components/Task";
import Navbar from "../src/components/Navbar";
import Member from "../src/components/Member";
import Login from "../src/components/Login";
import Footer from "../src/components/Footer";
import Dashbord from "../src/components/Dashbord";
import New_task_form from "../src/components/New_task_form";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashbord />,
      },
      {
        path: "/member",
        element: <Member />,
      },
      {
        path: "/task",
        element: <Task />,
      },
      {
        path: "/edit",
        element: <Member />,
      },
      {
        path: "/new_task_form",
        element: <New_task_form />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
