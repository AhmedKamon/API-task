import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { membersFromStore, removeMembers } from "../redux/memberSlice";
import {  tasksFromStore } from "../redux/taskSlice";

function Member() {
  const {id} = useParams()
  console.log(id,'mem')
  const { members } = useSelector(membersFromStore);
  const { tasks } = useSelector(tasksFromStore);
  console.log(members, "mem");
  const dispatch = useDispatch();
  const removeItemFromBasket = (id) => {
    dispatch(removeMembers({ id }));
  };
  var cars = tasks,
    groupedItemsInBasket = cars.reduce(function (r, a) {
      r[a.assign_to] = r[a.assign_to] || [];
      r[a.assign_to].push(a);
      return r;
    }, Object.create(null));

  console.log(groupedItemsInBasket);
  return (
    <div className="flex px-32 py-10 h-[calc(100vh-6rem)]">
      <div className="flex-1">
      <h1 className="text-2xl mt-5">Members and Number of task</h1>
        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
          <>
            <h1 key={key} id={key} items={items}>
              {" "}
              <span className="font-bold">Name:</span> {  key  } { key === 'mohi' && <span className="text-green-400 text-sm">default member</span>}
            </h1>
            <p>number of task: {items.length}</p>
          </>
        ))}
        <h1 className="text-2xl mt-5">All Members Name</h1>
        <ul className="list-disc">
          {members &&
            members.map((task) => (
              <li>
                <p>Title: {task.name}</p>
                <p>Description: {task.email}</p>
                <button
                  onClick={() => removeItemFromBasket(task.uid)}
                  className="bg-red-400 px-4 py-2 my-2 rounded-sm text-white"
                >
                  delete
                </button>
                <div className="bg-green-400 px-4 py-2 inline-block"><Link to={`/member/${task.uid}`}>update</Link></div>
                
              </li>
            ))}
        </ul>

      </div>
      <div className="flex-1">
        <Link
          to="/new_member_form"
          className="bg-teal-600 text-white py-2 px-4 my-10 rounded-md"
        >
          Create New Member
        </Link>
      </div>
    </div>
  );
}

export default Member;
