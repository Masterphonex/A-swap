import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";
import DashNavbar from "../components/DashNavbar";
import interest from "../assets/images/interest.png";
import atm from "../assets/images/atm-machine.png";
import deposit from "../assets/images/deposit.png";
import rating from "../assets/images/rating.png";
import Reviews from "../components/Reviews";

const Dashboard = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="w-[100vw] bg-[#001F3F]">
      <DashNavbar />

      <div className="body flex flex-col px-7 py-5  gap-[20px] items-center">
        {/* Card  */}
        {/* Card  */}
        {/* Card  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="card bg-[#086f60] w-[300px] border border-white border-opacity-[.6] text-white backdrop-filter backdrop-blur-lg  py-4 px-4 rounded-lg shadow-lg "
        >
          <div className="amount flex justify-between items-center p-3 h-[90px]">
            <div className="cash h-[40px] w-[170px] flex items-center">
              {show ? (
                <h1 className="font-bold text-2xl">$ 0.00</h1>
              ) : (
                <h1 className="font-bold text-2xl">*******</h1>
              )}
            </div>
            <div
              className="eye cursor-pointer"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? <HiEye size={20} /> : <HiEyeOff size={20} />}
            </div>
          </div>
          <div className="buttons flex justify-between items-center p-3 h-[90px]">
            <Link to="/withdraw">
              <div className="box">
                <div className="w-[50px] p-2 flex items-center justify-center h-[50px] bg-[#4014b9] rounded-md cursor-pointer">
                  <img src={atm} className="w-[40px]" />
                </div>
                <h1>Withdraw</h1>
              </div>
            </Link>
            <Link to="/deposit">
              <div className="box">
                <div className="w-[50px] p-2 flex items-center justify-center h-[50px] bg-[#4014b9] rounded-md cursor-pointer">
                  <img src={deposit} className="w-[40px]" />
                </div>
                <h1>Deposit</h1>
              </div>
            </Link>
            <Link to="/investment">
              <div className="box">
                <div className="w-[50px] p-2 flex items-center justify-center h-[50px] bg-[#4014b9] rounded-md cursor-pointer">
                  <img src={interest} className="w-[40px]" />
                </div>
                <h1>Investment</h1>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Rating */}
        {/* Rating */}
        {/* Rating */}
        <div className="rating flex w-[300px]  h-[200px] items-center mt-[40px] justify-between">
          <h1 className="text-7xl font-bold text-white">4.7</h1>
          <img src={rating} className="w-[150px] h-[150px]" />
        </div>

        {/* Reviews */}
        {/* Reviews */}
        {/* Reviews */}
        <div>
        <Reviews />
        </div>
        {/* Workers */}
        {/* Workers */}
        {/* Workers */}
        <div className="worker mt-[40px]">
          <h1 className="text-white font-bold text-2xl">
              Team Members
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
