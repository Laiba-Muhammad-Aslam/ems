import React from 'react'
import Header from '../features/Header'
import TaskListNumbers from '../features/TaskListNumbers'
import TasList from '../TaskList/TasList'

export default function EmployeeDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header/>
        <TaskListNumbers/>
        <TasList/>
    </div>
  )
}
