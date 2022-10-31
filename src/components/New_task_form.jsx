import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function New_task_form() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    description: "",
    assign_to: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    navigate('/task')
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className='login-bg items-center flex justify-center h-[calc(100vh-6rem)]'>
    <form action="" className='flex login-form-bg w-3/5' onSubmit={handleSubmit} >
      <div className='flex-1 flex justify-center items-center'>
        <div className=' text-center'>
          <img src="/Settings-icon.png" className='w-32' alt="" />
          <h1 className='font-bold text-lg text-gray-900'>Create</h1>
          <h3 className='font-bold text-lg text-gray-900'>New Task</h3>
        </div>
      </div>
      <div className='flex-1 p-12'>
        <h1 className='text-center font-bold my-10'>Create</h1>
        <div className='mb-3'>
          <label className='block mb-2 ' htmlFor="user">Title</label>
          <input value={values["title"]}
              onChange={onChange} name='title' className=' border-2 p-2 w-full border-black focus:border-gray-400 focus:outline-none'  type="text" required />
        </div>
        <div className='mb-3'>
          <label className='block mb-2 ' htmlFor="user">Description</label>
          <input value={values["description"]}
              onChange={onChange} name='description' className=' border-2 p-2 w-full border-black focus:border-gray-400 focus:outline-none'  type="text"  />
        </div>
        <div className=''>
          <label className='block mb-2 ' htmlFor="user">Assign to</label>
          <select onChange={onChange} name="assign_to" id="" className='border-2 p-2 w-full border-black focus:border-gray-400 focus:outline-none'>
            <option value="kamon">Kamon</option>
            <option value="zaman">Zaman</option>
            <option value="mohi">Mohi</option>
          </select>
        </div>
        <button className='bg-teal-600 text-white w-full py-2 my-10 rounded-md'>Create A Task</button>
      </div>
    </form>
  </div>
  )
}

export default New_task_form