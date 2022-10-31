import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeTasks, tasksFromStore } from "../redux/taskSlice";

function Task() {
  const { tasks } = useSelector(tasksFromStore);
  console.log(tasks,'atska')
  const [id ,setId] = useState('')
  console.log(id,'id')
  const dispatch = useDispatch();
  const removeItemFromBasket = (id) => {
    dispatch(removeTasks({id}));}
  return (
    <div className="flex px-32 py-10 h-[calc(100vh-6rem)]">
      <div className="flex-1">
        <h1 className="text-2xl">All Tasks</h1>
        <ul className="list-disc">
          {tasks &&
            tasks.map((task) => (
              <li>
                <p>Title: {task.title}</p>
                <p>Description: {task.description}</p>
                <p>Assign To: {task.assign_to}</p>
                <p>Creation Date: {task.date}</p>
                <button onClick={()=>removeItemFromBasket(task.uid)} className="bg-red-400 px-4 py-2">delete</button>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex-1">
        <Link
          to="/new_task_form"
          className="bg-teal-600 text-white py-2 px-4 my-10 rounded-md"
        >
          Create New task
        </Link>
      </div>
    </div>
  );
}

export default Task;
