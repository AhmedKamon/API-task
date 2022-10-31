import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logedUser, remove } from "../redux/userSlice";

function Navbar() {
  const user = useSelector(logedUser);
  const dispatch = useDispatch();
  console.log(user, "navbar");
  return (
    <div className="bg-gray-50 flex justify-between items-center p-5">
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/">Dashbord</Link>
          </li>
          <li>
            <Link to="/task">Task</Link>
          </li>
          <li>
            <Link to="/member">Members</Link>
          </li>
          <li>{ user && user.name  }</li>
          <li>
            <button onClick={()=> dispatch(remove())}>logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
