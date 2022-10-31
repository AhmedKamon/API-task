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

const Layout = () => {
  const user = useSelector(logedUser);
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
  const user = useSelector(logedUser);
  console.log(user, "user redux");
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
