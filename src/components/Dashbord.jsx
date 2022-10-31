import React from 'react'
import { Link } from 'react-router-dom'

function Dashbord() {
  return (
    <div className='p-20 h-[calc(100vh-6rem)]'>
        <ul className='space-y-5'>
            <li><Link to='/task'> Tasks</Link></li>
            <li><Link to='/member'> Members</Link></li>
        </ul>
    </div>
  )
}

export default Dashbord