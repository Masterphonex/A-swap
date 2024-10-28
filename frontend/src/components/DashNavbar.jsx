import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const DashNavbar = ({spanish, setSpanish}) => {
  const { userInfo } = useSelector((state) => state.auth);

  const [nav, setNav] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {nav && (
        <div
        className="w-[100vw] h-[100vh] bg-black opacity-[0.2] absolute z-40"
          onClick={() => setNav(false)}
        />
      )}

      <div className="nav w-[100vw] px-10 py-4 flex justify-between items-center">
        <Link to="/profile">
          {" "}
          <div className="w-[50px]  h-[50px] bg-[#333333] text-center rounded-full flex items-center font-bold text-white justify-center text-lg shadow-md shadow-gray-900 cursor-pointer">
            <h1>{userInfo.username[0]}</h1>
          </div>
        </Link>
        <div className="cursor-pointer" onClick={() => setNav((prev) => !prev)}>
          {" "}
          {!nav ? (
            <HiMenu size={25} color="white" />
          ) : (
            <HiX size={25} color="white" />
          )}
        </div>

        <nav
          className={
            nav
              ? "w-[200px] flex flex-col py-6 items-center justify-between  bg-blue-500 font-bold text-white text-lg absolute left-[-10px] top-20 rounded-md  transition-all ease-in-out duration-100 z-50"
              : "w-[200px] flex flex-col py-6 items-center justify-between h-[80vh] bg-blue-500 font-bold text-white text-lg absolute left-[-1000px] top-20 rounded-md transition-all ease-in-out duration-100 z-50"
          }
        >
          <ul className="flex flex-col gap-20  text-center">
            <Link to="/dash" onClick={() => setNav(false)}>
              Home
            </Link>
            <Link to="/withdraw">Withdraw</Link>
            <Link to="/investment">Investment</Link>
          </ul>
          
           <button 
        onClick={() => setSpanish((prev) => !prev)}
        className="btn btn-primary mb-5 mt-10"> {spanish ? "English" : "Spanish"}</button>


          <ul>
            <h1 onClick={logoutHandler} className="cursor-pointer">
              Log Out
            </h1>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashNavbar;
