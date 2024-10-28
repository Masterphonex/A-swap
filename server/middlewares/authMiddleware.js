import jwt from "jsonwebtoken";
import { Users } from "../models/users.js";

const protect = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JSON_TOKEN);

      req.user = await Users.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      return res.status(401).json({ error: "Not Authorized, Invalid Token" });
    }
  } else {
    return res.status(401).json({ error: "Not Authorized, No Token" });
  }
};






export { protect } 