import React from 'react'
import Header from '../features/Header'
import TaskListNumbers from '../features/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

export default function EmployeeDashboard(props) {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}
