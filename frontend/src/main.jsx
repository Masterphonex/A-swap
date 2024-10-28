import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import {
  createBrowserRouter as Router,
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dash from './pages/Dash.jsx'
import Home from './pages/Home.jsx'
import Profile from "./pages/Profile.jsx";
import Withdraw from './pages/Withdraw.jsx'
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import ChangeProfile from "./pages/ChangeProfile.jsx";
import Admin from './pages/Admin.jsx'
import AdminDash from "./pages/AdminDash.jsx";
import Deposit from "./pages/Deposit.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<App />}>
      {/* <Route path="/" element={<Home />}/> */}
      <Route path="/login" index element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Private Routes */}
      <Route path="" element={<PrivateRoutes />}>
      <Route path="/dash" element={<Dash />} />
      <Route path="/profile" element={<Profile />}/>
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/changeprofile" element={<ChangeProfile />}/>
      <Route path="/deposit" element={<Deposit />}/>
      </Route>

    <Route path='/admin' element={<Admin />} />
    <Route  path='/adminDasherhpbeirbepirbepijnpi5u49754-92-958495y-498ygh4n' element={<AdminDash />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
