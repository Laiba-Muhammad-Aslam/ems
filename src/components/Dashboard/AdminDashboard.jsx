import React from 'react'
import Header from '../features/Header'
import CreateTask from '../features/CreateTask'

function AdminDashboard() {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>

      <CreateTask/>
    </div>
  )
}

export default AdminDashboard
