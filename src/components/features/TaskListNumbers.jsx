import React from 'react'

export default function TaskListNumbers() {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className=' w-[45%] p-10 bg-red-400 rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>  

        <div className=' w-[45%] p-10 bg-blue-400 rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div> 

        <div className=' w-[45%] p-10 bg-green-400 rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div> 

        <div className=' w-[45%] p-10 bg-yellow-400 rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div> 
    </div>
  )
}
