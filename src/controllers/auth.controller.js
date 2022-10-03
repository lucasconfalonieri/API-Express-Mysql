import jwt from "jsonwebtoken";
import { getConnection } from "./../database/database";

export const signinHandler = async (req, res) => {
    const connection = await getConnection();
  try {
    const userFound = await connection.findOne({where: {usuario: req.body.user}});

    if (!userFound) return res.status(400).json({ message: "Usuario no existente" });

    if (req.body.password != userFound.password)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: userFound.idUser }, 'secretKey', {
      expiresIn: 86400, // 24 hours
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};