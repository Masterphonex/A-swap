import express from "express";
const router = express.Router();
import { Users } from "../models/users.js";
import { adminLogin, getUsers } from "../controllers/adminController.js";




router.route("/").get( getUsers).post(adminLogin);

//Editing users Amount
router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const { amount } = req.body;

  const newAmount = await Users.findByIdAndUpdate(userId, {
    amount,
  });

  res.json({ newAmount });
});

//Deleting Users

router.delete("/:id", async (req, res) => {
  const userId = req.params.id;

  await Users.findByIdAndDelete(userId);
  res.json({ message: "User Deleted" });
});

export { router as adminRouter };
