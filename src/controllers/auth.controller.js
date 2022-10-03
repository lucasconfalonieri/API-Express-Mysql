import jwt from "jsonwebtoken";
import { getConnection } from "./../database/database";

const signinHandler = async (req, res) => {
    const connection = await getConnection();
  try {
    const userFound = await connection.findOne({where: {usuario: req.body.user}});

    if (!userFound) return res.status(400).json({ message: "Usuario no existente" });

    if (req.body.password != userFound.password)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: 10 }, 'secretKey', {
      expiresIn: 1, // 24 hours
    });

    res.json({ auth: { token } });
  } catch (error) {
    console.log(error);
  }
};

const getValidarToken = async (req, res) => {
  try {
     res.json({"hola": "holas"});
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};


export const methods = {
  signinHandler,
  getValidarToken
};