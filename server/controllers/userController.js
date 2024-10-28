import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { Users } from "../models/users.js";
import generateToken from "../utils/generateToken.js";

dotenv.config();

const registerUser = async (req, res) => {
  //Grab the Information
  const { fullname, username, email, password } = req.body;

  if (!fullname || !username || !email || !password) {
    return res.json({
      error: "Fill All Field",
    });
  } else {
    //Check if the user Exist

    const user = await Users.findOne({ username });
    const userEmail = await Users.findOne({ email });

    if (user) {
      return res.json({
        error: "User already exist",
      });
    } else {
      if (userEmail) {
        return res.json({
          error: "Email already exist",
        });
      } else {
        const Amount = 0;
        //hash the Code
        const hashedPassword = await bcrypt.hash(password, 10);

        //pass the Info to the Database

        const newUser = await Users.create({
          fullname,
          username,
          email,
          password: hashedPassword,
          amount: Amount,
        });

        if (newUser) {
          generateToken(res, newUser._id);
          res.status(201).json({
            id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            email: newUser.email,
            amount: newUser.amount,
          });
        } else {
          return res.status(400).json({
            error: " invalid user Data",
          });
        }
      }
    }
  }
};

//login User
const loginUser = async (req, res) => {
  //grab the Information
  const { username, password } = req.body;
  const user = await Users.findOne({ username });

  if (!username || !password) {
    return res.json({
      error: "Fill All Field",
    });
  } else {
    //Verify if the user Exist
    if (!user) {
      return res.json({
        error: "User doesnt Exist",
      });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.json({ error: "Username or Password is Incorrect" });
      } else {
        generateToken(res, user._id);
        res.status(201).json({
          id: user._id,
          fullname: user.fullname,
          username: user.username,
          email: user.email,
          amount: user.amount,
        });
      }
    }
  }
};

//Logout user
const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged Out" });
};

//Get user Profile

const getUserProfile = (req, res) => {
  const user = {
    id: req.user._id,
    fullname: req.user.fullname,
    username: req.user.username,
    email: req.user.email,
  };
  res.status(200).json(user);
};

//Updating the user Profile

const updateUserProfile = async (req, res) => {
  const user = await Users.findById(req.user._id);

  if (user) {
    user.fullname = req.body.fullname || user.fullname;
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      fullname: updatedUser.fullname,
      username: updatedUser.username,
      email: updatedUser.email,
      amount: updatedUser.amount
    });
  } else {
    return res.status(404).json({
      error: "User Not Found",
    });
  }
};


const updateUserAmount = async (req, res) => {
  const { amount, address } = req.body
  const user = await Users.findById(req.user._id);

  if (user) {

    if (!amount || !address) {
      return res.status(400).json({
        error: "Please Fill All Field"
      })
    } else {
  if (user.amount < amount ) {
    return res.status(400).json({
      error: 'Insufficient Fund'
    })
  } else {
    user.amount -= amount;
    user.fullname = user.fullname
    user.email =  user.email
    user.username =  user.username
    user.password = user.password

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      fullname: updatedUser.fullname,
      username: updatedUser.username,
      email: updatedUser.email,
      amount: updatedUser.amount,
    });
  }
    }
  } else {
    return res.status(404).json({
      error: "User Not Found",
    });
  }
};


export {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  updateUserAmount,
};



// const updateUserAmount = async (req, res) => {
//   const user = await Users.findById(req.user._id);

//   if (user) {
//     user.amount -= req.body.amount;
//     user.fullname = req.body.fullname || user.fullname
//     user.email = req.body.email || user.email
//     user.username = req.body.username || user.username
//     user.password = req.body.password || user.password

//     const updatedUser = await user.save();

//     res.status(200).json({
//       _id: updatedUser._id,
//       fullname: updatedUser.fullname,
//       username: updatedUser.username,
//       email: updatedUser.email,
//       amount: updatedUser.amount,
//     });
//   } else {
//     return res.status(404).json({
//       error: "User Not Found",
//     });
//   }
// };