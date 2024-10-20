import React from 'react'

export default function Login() {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-red-600'>
            <form className='flex flex-col items-center justify-center'>
                <input className='border-2 rounded-full border-red-600' type="email" placeholder='Enter your Email' />
                <input type="password" placeholder='Enter Password' />
                <button>Log in</button>
            </form>
        </div>
    </div>
  )
}
