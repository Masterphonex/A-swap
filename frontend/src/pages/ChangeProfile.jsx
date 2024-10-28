import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredientials } from "../slices/authSlice";
import {toast} from 'react-toastify'
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import DashNavbar from "../components/DashNavbar";



const ChangeProfile = () => {
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
  
    const { userInfo } = useSelector((state) => state.auth);

    const [updateProfile, {isLoading}] = useUpdateUserMutation();

    useEffect(() =>{
      setFullname(userInfo.fullname)
      setUsername(userInfo.username)
      setEmail(userInfo.email)
      setPassword(userInfo.password)
    },[userInfo.setFullname, userInfo.setUsername, userInfo.setEmail, userInfo.setPassword])
  
    const onSubmit = async (e) => {
      e.preventDefault()
      try {
        const response = await updateProfile({_id: userInfo._id, fullname, username, email, password}).unwrap()

        if (response) {
            // Check for error status in the response
            if (response.error) {
              toast.error(response.error);// Display error message
            } else {
              dispatch(setCredientials({ ...response }));
              navigate('/profile');
              toast.success('Update Success')
            }
          }
          
      } catch (err) {
        console.log(err)
      }
    };
  
    return (
      <div className="bg-[#001F3F] w-[100vw] font-bold text-white  h-[100vh]">
        <DashNavbar />

        <div className="flex flex-col items-center gap-5 mt-3">
        <h1 className="font-bold text-3xl">Change Profile</h1>
        <form
          className="w-[300px] text-black bg-gray-400 rounded-md drop-shadow-lg flex flex-col items-center px-5 py-7 gap-8"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="Fullname"
            className="px-3 py-2 rounded-sm"
            value={fullname}
            onChange={(e) => setFullname(() => e.target.value )}
          />
          <input
            type="text"
            placeholder="Username"
            className="px-3 py-2 rounded-sm"
            value={username}
            onChange={(e) => setUsername(() => e.target.value )}
          />
          <input
            type="email"
            placeholder="email"
            className="px-3 py-2 rounded-sm"
            value={email}
            onChange={(e) =>setEmail(() => e.target.value )}
          />
          <input
            type="text"
            placeholder="password"
            className="px-3 py-2 rounded-sm"
            value={password}
            onChange={(e) =>setpassword(() => e.target.value )}
          />
  
          <button type="submit" className="bg-green-800 px-8 text-white py-3 rounded-md">
            {isLoading ? <h1>Updating Profile</h1> : <h1>Update Profile</h1>}
          </button>
        </form>
        </div>
       
      </div>
    );
}

export default ChangeProfile