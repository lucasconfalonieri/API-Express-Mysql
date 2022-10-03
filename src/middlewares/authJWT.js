import jwt from "jsonwebtoken";
import { getConnection } from "./../database/database";

export const verifyToken = async (req, res, next) => {
    let token = req.headers["x-access-token"];
    const connection = await getConnection();
    if (!token) return res.status(403).json({ message: "No token provided" });
    try {
        const decoded = jwt.verify(token, 'secretKey');
        req.userId = decoded.id;
        const user = await connection.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ message: "No user found" });
        next();
  } catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
  }
};