import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { tasksFromStore } from '../redux/taskSlice';

function SingelTask() {
    const {id} = useParams()
    const { tasks } = useSelector(tasksFromStore);
    var single = tasks.filter(function (task) { return task.uid == id; });
    console.log('single t')
  return (
    <div className='p-32 '>
    <div className='space-y-4'>
    <h1>title: {single[0].title}</h1>
    <p>description: {single[0].description}</p>
    <p>Assign to: {single[0].assign_to}</p>
    <p>created date:{single[0].date}</p>
    </div>
   <div className='mt-5'>
   <Link className=' bg-green-400 px-4 py-2' to={`/update/${id}`}>Update</Link>
   </div>
    </div>
  )
}

export default SingelTask