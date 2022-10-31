import React, { useState } from 'react'
import { useDispatch, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMember } from '../redux/memberSlice';
import { addTask, } from '../redux/taskSlice';

function New_member_form() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const today = Date.now();
  const formatDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today);
  const uuid = Math.random() * 100 +today 
  const [values, setValues] = useState({
    name: "",
    email: "",
    date: formatDate,
    uid:uuid
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values,'member')
    dispatch(addMember(values));
    navigate('/member')
    
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
          <h3 className='font-bold text-lg text-gray-900'>New Member</h3>
        </div>
      </div>
      <div className='flex-1 p-12'>
        <h1 className='text-center font-bold my-10'>Create</h1>
        <div className='mb-3'>
          <label className='block mb-2 ' htmlFor="user">Name</label>
          <input value={values["name"]}
              onChange={onChange} name='name' className=' border-2 p-2 w-full border-black focus:border-gray-400 focus:outline-none'  type="text" required />
        </div>
        <div className='mb-3'>
          <label className='block mb-2 ' htmlFor="user">Email</label>
          <input value={values["email"]}
              onChange={onChange} name='email' className=' border-2 p-2 w-full border-black focus:border-gray-400 focus:outline-none'  type="text"  />
        </div>
        
        <button className='bg-teal-600 text-white w-full py-2 my-10 rounded-md'>Create A Member</button>
      </div>
    </form>
  </div>
  )
}

export default New_member_form