import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeTasks, selectSingleItemWithId, tasksFromStore } from "../redux/taskSlice";

function Task() {
  const { tasks } = useSelector(tasksFromStore);
  console.log(tasks,'tsks')
  const dispatch = useDispatch();
  const removeItemFromBasket = (id) => {
    dispatch(removeTasks({ id }));
  };
  

  return (
    <div className="flex px-32 py-10 ">
      <div className="flex-1">
        <h1 className="text-2xl">All Tasks</h1>
        <ul className="list-disc">
          {tasks &&
            tasks.map((task) => (
              <li key={task.uid}>
                <p className="underline text-green-400"><Link to={`/task/${task.uid}`} >Title: {task.title}</Link></p>
                <p>Description: {task.description}</p>
                <p>Assign To: {task.assign_to}</p>
                <p>Creation Date: {task.date}</p>
                <p>updated Date: {task?.updated}</p>
                <button
                  onClick={() => removeItemFromBasket(task.uid)}
                  className="bg-red-400 px-4 py-2 my-2 rounded-sm text-white"
                >
                  delete
                </button>
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
