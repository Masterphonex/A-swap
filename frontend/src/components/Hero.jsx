import React from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 border border-gray-900 px-7 py-10 rounded-md shadow-md shadow-slate-900'>
        <h1>Welcome Page</h1>
        <p>Welcome to A-swap Webpage,
            <br/>
            Feel free to Login or Sign up
        </p>

        <div className="buttons flex gap-10">
          <Link to='/login'>  <button className='bg-gray-800 font-bold text-white px-5 py-2 rounded-md shadow-md'>Login</button></Link>
            <Link to='/register'><button className='bg-gray-800 font-bold text-white px-5 py-2 rounded-md shadow-md'>Register</button></Link>
        </div>
        </div>
  )
}

export default Hero
