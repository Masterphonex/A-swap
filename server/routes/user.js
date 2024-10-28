import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  updateUserAmount
} from "../controllers/userController.js";

import { protect } from "../middlewares/authMiddleware.js";

//Registration
router.post("/register", registerUser);

//Login Route
router.post("/login", loginUser);

//Log out User
router.post("/logout", logoutUser);

//Getting the User Profile

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.put("/withdraw", protect, updateUserAmount);

export { router as userRouter };
