import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

const PORT = 5000;
const __dirname = path.resolve();

import { userRouter } from "./routes/user.js";
import { adminRouter } from "./routes/admin.js";

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/auth", userRouter);
app.use("/api/admin", adminRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})


mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => console.log("💻 Mondodb Connected"))
  .catch((err) => console.error(err));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
