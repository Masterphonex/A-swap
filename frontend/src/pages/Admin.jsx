import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = data;
    try {
      const { data } = await axios.post("http://localhost:5000/api/admin", {
        username,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Login Success");
        navigate("/adminDasherhpbeirbepirbepijnpi5u49754-92-958495y-498ygh4n");
      }
    } catch (err) {
      console.log(err);

      // alert("clicked");
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-3xl">Admin Login</h1>
      <form
        className="w-[300px]  bg-gray-200 h-[300px] rounded-md drop-shadow-lg flex flex-col items-center  justify-center px-5 py-7 gap-8"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          className="px-3 py-2 rounded-sm"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="password"
          className="px-3 py-2 rounded-sm"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button type="submit" className="bg-gray-300 px-8 py-3 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Admin;
