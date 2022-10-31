import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { membersFromStore, removeMembers } from '../redux/memberSlice';

function Member() {
  const { members } = useSelector(membersFromStore);
  console.log(members,'mem');
  const dispatch = useDispatch();
  const removeItemFromBasket = (id) => {
    dispatch(removeMembers({id}));}
  return (
    <div className="flex px-32 py-10 h-[calc(100vh-6rem)]">
      <div className="flex-1">
        <h1 className="text-2xl">All Members</h1>
        <ul className="list-disc">
          {members &&
            members.map((task) => (
              <li>
                <p>Title: {task.name}</p>
                <p>Description: {task.email}</p>
                <button onClick={()=>removeItemFromBasket(task.uid)} className="bg-red-400 px-4 py-2 my-2 rounded-sm text-white">delete</button>
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
  )
}

export default Member