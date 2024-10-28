import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector} from 'react-redux'

const Header = () => {
  const { userInfo} = useSelector((state) => state.auth)

  return (
   <>
   {!userInfo
   &&
    <nav className='bg-gray-800 w-[100vw] px-6 py-7 flex justify-between items-center'>
    <div><h1 className='text-lg font-bold text-white'>A-swap. </h1></div>
    <ul className='flex gap-5 font-bold text-white'>
       <Link to='/login'><li>Login</li></Link>
       <Link to='/register'><li>Register</li></Link>
   </ul>
</nav>
}</>
  )
}

export default Header
