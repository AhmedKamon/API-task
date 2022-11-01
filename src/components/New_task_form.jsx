import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { membersFromStore } from '../redux/memberSlice';
import { addTask, tasksFromStore, updateTasks, } from '../redux/taskSlice';

function New_task_form() {
  const {id} = useParams()
  const { tasks } = useSelector(tasksFromStore);
    var single = tasks.filter(function (task) { return task.uid == id; });
    console.log(single,'single t')
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { members } = useSelector(membersFromStore);
  const today = Date.now();
  const formatDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today);
  const uuid = Math.floor(Math.random()) * 100 +today 
  const [values, setValues] = useState({
    title: "",
    description: "",
    assign_to: "",
    date: formatDate,
    uid: id ? id : uuid,
    updated: id && formatDate
  });
  
  useEffect(() => {
    if (single[0]?.title) {
      setValues({
        ...single[0],
      });
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    !id && dispatch(addTask(values));
    id && dispatch(updateTasks(values, id));
    navigate('/task')
    
  };
  useEffect(() =>{
    
  })

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className='login-bg items-center flex justify-center h-[calc(100vh-6rem)]'>
    <form action="" className='flex login-form-bg w-3/5' onSubmit={handleSubmit} >
      <div className='flex-1 flex justify-center items-center'>
        <div className=' text-center'>
          <img src="/Settings-icon.png" className='w-32' alt="" />
          <h1 className='font-bold text-lg text-gray-900'>{id ? 'update' : 'Create'}</h1>
          <h3 className='font-bold text-lg text-gray-900'>{id ? 'update' : 'Create'}New Task</h3>
        </div>
      </div>
      <div className='flex-1 p-12'>
        <h1 className='text-center font-bold my-10'>{id ? 'update' : 'Create'}</h1>
        <div className='mb-3'>
          <label className='block mb-2 ' htmlFor="user">Title</label>
          <input value={ values["title"]}
              onChange={onChange} name='title' className=' border-2 p-2 w-full border-black focus:border-gray-400 focus:outline-none'  type="text" required />
        </div>
        <div className='mb-3'>
          <label className='block mb-2 ' htmlFor="user">Description</label>
          <input value={  values["description"]}
              onChange={onChange} name='description' className=' border-2 p-2 w-full border-black focus:border-gray-400 focus:outline-none'  type="text"  />
        </div>
        <div className=''>
          <label className='block mb-2 ' htmlFor="user">Assign to</label>
          <select onChange={onChange} name="assign_to" id="" className='border-2 p-2 w-full border-black focus:border-gray-400 focus:outline-none'>
            <option value="mohi">assigne </option>
            { members && members.map(member => <option value={`${member.name}`}>{member.name}</option> )}
          </select>
        </div>
        {id?<button className='bg-teal-600 text-white w-full py-2 my-10 rounded-md' onClick={()=>updateTasks(id)}>update </button>:
        <button className='bg-teal-600 text-white w-full py-2 my-10 rounded-md'>Create A New Task</button>}
      </div>
    </form>
  </div>
  )
}

export default New_task_form