import React, {useState} from 'react'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted! ");
    console.log("email is", email);
    console.log("Password is", password);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    setEmail("");
    setPassword("");
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required 
                className='border-2 rounded-full border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your Email' 
                />
                <input 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required type="password" placeholder='Enter Password' 
                className='border-2 rounded-full border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 mt-3' />
                <button className='rounded-full bg-emerald-600 py-3 px-5 text-xl text-white outline-none placeholder:text-white border-none mt-4'>Log in</button>
            </form>
        </div>
    </div>
  )
}
