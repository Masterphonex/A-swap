import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, updateUserAmount } from "../slices/adminSlice";
import {toast} from 'react-toastify'
import '../admin.css'
import axios from "axios";

const AdminDash = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector((state) => state.users.users);

  const [info, setInfo] = useState([])
  const [amount, setAmount] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleEdit = async (_id) => {
    try {
        const response = await fetch(`/api/admin/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        dispatch(updateUserAmount({ userId: _id, newAmount: amount }));
        setIsEdit(false);
      } catch (err) {
        console.error("Error editing user:", err);
      }
  };


  const fetchData = async () => {
    try {
        const response = await fetch("/api/admin");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);
        setInfo(data.users || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setIsLoading(false);
      }

    }
  const handleDelete = async (_id) => {
    try {
        const response = await fetch(`/api/admin/${_id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setUsers(users.filter((user) => user._id !== _id));
        setIsDelete(false);
      } catch (error) {
        console.error("Error deleting user:", error);
        // Handle error, show message, or perform other actions
      }
  };

  useEffect(() => {
    // Fetch users logic...
    fetchData()
  }, []);

  return (
    <div className="bg-gray-500 h-[100vh] w-[100vw] flex items-center justify-center">
      {/* Table JSX... */}
      <table className="bg-blue-200 w-[300px] ">
        <thead>
          <tr>
            <th className="text-center">Username</th>
            <th className="text-center">Amount</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {info.map((user) => (
            <tr key={user._id}>
              <td className="text-center">{user.username}</td>
              <td className="text-center">{user.amount}</td>
              <td>
                <button
                  onClick={() => {
                    setSelectedUserId(user._id);
                    setIsEdit(true);
                  }}
                  className="bg-blue-500 font-bold rounded-sm text-white px-5 py-2"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    setSelectedUserId(user._id);
                    setIsDelete(true);
                  }}

                  className="bg-red-500 font-bold text-white px-5 py-2 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isDelete && selectedUserId && (
        <div className="px-7 font-sans font-bold  gap-10 py-14 bg-gray-400 flex flex-col items-center justify-center absolute rounded-md ">
          <h1>Are you sure you want to delete this user?</h1>
        <div className="flex gap-10 items-center justify-center">
        <button onClick={() => handleDelete(selectedUserId)} className="px-10 py-2 rounded bg-green-800 text-white">Yes</button>
          <button onClick={() => setIsDelete(false)} className="px-10 py-2 rounded bg-red-800 text-white">No</button>
        </div>
        </div>
      )}

      {isEdit && selectedUserId && (
        <div className="absolute bg-gray-400 flex flex-col px-10 py-10 rounded-md gap-10 ">
          <input
            placeholder="Change Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="flex gap-5 justify-center">
            <button onClick={() => handleEdit(selectedUserId)} className="bg-green-400 px-10 py-2 rounded-md font-bold text-white">Done</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default AdminDash;
