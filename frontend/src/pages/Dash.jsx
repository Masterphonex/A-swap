import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";
import DashNavbar from "../components/DashNavbar";
import interest from "../assets/images/interest.png";
import atm from "../assets/images/atm-machine.png";
import deposit from "../assets/images/deposit.png";
import rating from "../assets/images/rating.png";
import Reviews from "../components/Reviews";
import TeamDiv from "../components/TeamDiv";
import Elon from "../assets/images/Elon.jpg";
import GwynneShotwell from "../assets/images/GwynneShotwell.jpg";
import jb from "../assets/images/jb.jpg"
import jason from "../assets/images/jason.png"

const Dash = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const { userInfo } = useSelector((state) => state.auth);
  const [amount, setAmount] = useState("");
  const [username, setUsername] = useState("");
const [spanish, setSpanish] = useState(false)

  useEffect(() => {
    setAmount(userInfo.amount);
    setUsername(userInfo.username);
  }, [userInfo]);

  return (
    <div className="w-[100vw] bg-[#001F3F]">
      <DashNavbar spanish={spanish} setSpanish={setSpanish}/>

      <div className="body flex flex-col px-7 py-5  gap-[20px] items-center">
        <h1 className="font-bold text-white ">Hi, Welcome {username}</h1>
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
                <h1 className="font-bold text-2xl">$ {amount}</h1>
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
          <h1 className="text-white font-bold text-2xl">Team Members</h1>
          <div className=" flex flex-col gap-4 mt-5 w-[350px] border rounded border-white p-4 ">
            <TeamDiv image={Elon} name="Elon Musk" />
            <TeamDiv image={GwynneShotwell} name="GwynneShotwell"/>
            <TeamDiv image={jason} name="Jason Calacanis"/>
            <TeamDiv image={jb} name=" JB Straubel"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
