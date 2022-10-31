import React from 'react'
import { Link } from 'react-router-dom'

function Dashbord() {
  return (
    <div>
        <ul>
            <li><Link to='/task'> Tasks</Link></li>
            <li><Link to='/member'> Members</Link></li>
        </ul>
    </div>
  )
}

export default Dashbord