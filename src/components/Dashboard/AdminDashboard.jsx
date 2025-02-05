import React from 'react'
import Header from '../features/Header'
import CreateTask from '../features/CreateTask'
import AllTask from '../features/AllTask'

function AdminDashboard(props) {
  return (
    <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
  )
}

export default AdminDashboard
