import React, { useState } from 'react'
// import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  // console.log("Mai props",props.data.firstName)
  console.log("Mai props",props)

  const isAdmin = props.data && !props.data.firstName && props.data.email;
 

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{isAdmin ? props.email : (props.data?.firstName || 'Admin')} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header