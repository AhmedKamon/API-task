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
import { useSelector } from "react-redux";
import { logedUser } from "./redux/userSlice";
import New_member_form from "./components/New_member_form";
import SingelTask from "./components/SingelTask";

const Layout = () => {
  const user = useSelector(logedUser);
  console.log(user)
  return (
    
    <>
    {user.name ? 
    <>
      <Navbar />
      <Outlet />
      <Footer /></> : <Login />}
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
        path: "/task/:id",
        element: <SingelTask />,
      },
      {
        path: "/edit",
        element: <Member />,
      },
      {
        path: "/new_task_form",
        element: <New_task_form />,
      },
      {
        path: "/update/:id",
        element: <New_task_form />,
      },
      {
        path: "/new_member_form",
        element: <New_member_form />,
      },
      {
        path: "/member/:id",
        element: <New_member_form />,
      },
    ],
  },
]);
function App() {
  const user = useSelector(logedUser);
  console.log(user, "user redux");
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
