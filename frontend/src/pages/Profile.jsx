import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredientials } from "../slices/authSlice";
import {toast} from 'react-toastify'
import DashNavbar from "../components/DashNavbar";

const Profile = () => {
  const { userInfo} = useSelector((state) => state.auth)

return(
  <div className="bg-[#001F3F] w-[100vw] font-bold text-white flex flex-col items-center h-[100vh]">
    <DashNavbar />
    <h1 className="mt-2 font-bold text-lg cursor-pointer ">Your Profile </h1>
    <div className="bg-gray-400 w-[300px] mt-5 rounded-lg flex flex-col px-4 py-7 items-center gap-4">
     <div className=" px-3 py-2 items-start justify-start flex flex-col">
     <label className="flex ">Fullname</label>
      <button className="bg-blue-500 w-[200px] h-[40px] px-3 py-5 rounded-md flex items-center justify-center mt-3 ">{userInfo.fullname}</button>
     </div>

     {/* Username */}
     <div className=" px-3 py-2 items-start justify-start flex flex-col">
     <label className="flex ">Username</label>
      <button className="bg-blue-500 w-[200px] h-[40px] px-3 py-5 rounded-md flex items-center justify-center mt-3 ">{userInfo.username}</button>
     </div>

     {/* email */}
     <div className=" px-3 py-2 items-start justify-start flex flex-col">
     <label className="flex ">Email Address</label>
      <button className="bg-blue-500 w-[200px] h-[40px] px-3 py-5 rounded-md flex items-center justify-center mt-3 ">{userInfo.email}</button>
     </div>

   <Link to='/changeprofile'>  <button className="bg-green-500 mt-4  w-[200px] h-[40px] px-3 py-5 flex items-center justify-center rounded-md shadow-md">Change Profile</button></Link>
    </div>
  </div>
)
}

export default Profile