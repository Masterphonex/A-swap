import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashNavbar from "../components/DashNavbar";
import { HiInformationCircle } from "react-icons/hi";

const Deposit = () => {
  const navigate = useNavigate();

  const [Address, setAddress] = useState("UQDVpMQPnzBCJtiKFRfylVx4XonGPY7JH3XLFyC1j4s4ntDb");

  const onCopy =  () => {
    navigator.clipboard.writeText(Address);
  };

  return (
    <div className="bg-[#001F3F] w-[100vw] font-bold text-white  h-[100vh] ">
      <DashNavbar />
      <div className="flex flex-col justify-center gap-10 items-center h-[70vh] ">
        <h1 className="font-bold text-3xl">Deposit</h1>
        <div className="flex w-[300px] border rounded-md h-[200px] items-center p-2 justify-between">
          <HiInformationCircle size={30} />
        </div>
        <div className="h-full w-[350px]  bg-purple-400  flex justify-between rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-100">
          <table className="border-none">
            <tr className="border-none">
              <th >Address</th>
              <td className="border-none">
              <p className="text-[10px]">UQDVpMQPnzBCJtiKFRfylVx4XonGPY7JH3XLFyC1j4s4ntDb</p>
              <p>Ton Wallet</p>
              <button className="w-[100px] h-[40px] rounded-md border border-white mt-4" onClick={onCopy()}>copy</button>

              </td>
            </tr>
            <tr className="border-none">
              <th>Address Type</th>

              <td className="border-none">USDT</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
