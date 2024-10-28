import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredientials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { useUpdateAmountMutation } from "../slices/usersApiSlice";
import DashNavbar from "../components/DashNavbar";
import { HiInformationCircle } from "react-icons/hi";

const Withdraw = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [account, setAccount] = useState(false)
  const [address, setAddress] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const [amount, setAmount] = useState(userInfo.amount);

  const [updateAmount, { isLoading }] = useUpdateAmountMutation();

  useEffect(() => {
    if (userInfo && userInfo.amount !== undefined) {
      setAmount(userInfo.amount.toString());
    }
  }, [userInfo]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateAmount({
        _id: userInfo._id,
        amount,
        address,
      }).unwrap();

      if (response) {
        // Check for error status in the response
        if (response.error) {
          toast.error(response.error); // Display error message
        } else {
          dispatch(setCredientials({ ...response }));
          navigate("/dash");
          toast.success("withdraw Success");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" w-[100vw] font-bold text-white   ">
      <DashNavbar />
      <div className="flex flex-col justify-center gap-10 items-center  ">
        <h1 className="font-bold text-3xl mt-[200px]">Withdraw</h1>
        <div className="flex w-[300px] border rounded-md h-[100px] items-center p-2 justify-between">
          <HiInformationCircle size={30} />
          <div className="flex flex-col gap-2">
            <h1>NOTE: </h1>
            <p className="text-[15px]">
              Money shall be Recieved after <br /> 24hours - 48hours
            </p>
          </div>
        </div>
        <div className="flex w-[300px] border border-red-500 rounded-md h-[100px] items-center p-2  justify-between">
          <HiInformationCircle size={30} />
          <div className="flex flex-col gap-2">
            <h1>Warning: </h1>
            <p className="text-[14px]">Review Address Before Withdrawing</p>
          </div>
        </div>
        
        <button 
        className = "btn btn-primary font-bold text-white"
        
        onClick={() => setAccount((prev) => !prev)}>
        {!account ? 
        
        "Switch to local Account" : " Switch to BTC Wallet"}
        </button>
        
        {account ? 
        
        <form
        className="w-[300px] rounded-md drop-shadow-lg flex flex-col items-center px-5 py-7 gap-8"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="Amount"
            className=" input input-bordered input-primary px-4 py-5 rounded-md text-white"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          
           <input
            type="text"
            placeholder="Account Number"
            className=" input input-bordered input-primary px-4 py-5 rounded-md text-white"
            
          />

          <input
            type="text"
            placeholder="Bank Name "
            value={address}
          className="input input-bordered input-primary px-4 py-5 rounded-md text-black"
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type="submit" className="bg-green-800 px-8 py-3 text-white font-bold rounded-md btn btn-success">
            {isLoading ? <h1>withdrawing</h1> : <h1>Withdraw</h1>}
          </button>
        </form> 
        :
          <form
        className="w-[300px]  rounded-md drop-shadow-lg flex flex-col items-center px-5 py-7 gap-8"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="Amount"
            className=" input input-bordered input-primary px-4 py-5 rounded-md text-white"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="text"
            placeholder="Wallet Address"
            value={address}
          className="input input-bordered input-primary px-4 py-5 rounded-md text-black"
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type="submit" className="bg-green-800 px-8 py-3 text-white font-bold rounded-md btn btn-success">
            {isLoading ? <h1>withdrawing</h1> : <h1>Withdraw</h1>}
          </button>
        </form>
        }
      </div>
    </div>
  );
};

export default Withdraw;
