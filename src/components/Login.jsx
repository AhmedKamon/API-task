import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  redirect,
  Route,
  Router,
  useNavigate,
} from "react-router-dom";
import { logedUser, update } from "../redux/userSlice";

function Login() {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(logedUser);
  console.log(user, "user redux");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(update(values));

    return navigate("/");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen login-bg items-center flex justify-center">
      <form
        action=""
        className="flex login-form-bg w-3/5"
        onSubmit={handleSubmit}
      >
        <div className="flex-1 flex justify-center items-center">
          <div className=" text-center">
            <img src="/Settings-icon.png" className="w-32" alt="" />
            <h1 className="font-bold text-lg text-gray-900">Welcome to</h1>
            <h3 className="font-bold text-lg text-gray-900">ERP</h3>
          </div>
        </div>
        <div className="flex-1 p-12">
          <h1 className="text-center font-bold my-10">Login</h1>
          <div className="mb-3">
            <label className="block mb-2 " htmlFor="user">
              Email or Username
            </label>
            <input
              value={values["name"]}
              onChange={onChange}
              name="name"
              className=" border-2 p-2 w-full border-black focus:border-gray-400 focus:outline-none focus:outline-green-500 focus:invalid:outline-red-400 focus:border-none"
              type="text"
              required
            />
          </div>
          <div className="">
            <label className="block mb-2 " htmlFor="user">
              Password
            </label>
            <input
              value={values["password"]}
              onChange={onChange}
              name="password"
              className="border-2 p-2 w-full border-black focus:border-gray-400 focus:outline-none focus:outline-green-500 focus:invalid:outline-red-400 focus:border-none"
              type="password"
              required
            />
          </div>
          <p className="text-end text-gray-900">forgot password?</p>
          <button
            type="submit"
            className="bg-teal-600 text-white w-full py-2 my-10 rounded-md"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
