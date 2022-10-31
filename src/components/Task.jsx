import React from 'react'
import { Link } from 'react-router-dom'

function Task() {
  return (
    <div>
      <Link to="/new_task_form" className='bg-teal-600 text-white py-2 px-4 my-10 rounded-md'>Create New task</Link>
    </div>
  )
}

export default Task