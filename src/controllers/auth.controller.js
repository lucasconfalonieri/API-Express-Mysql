import jwt from "jsonwebtoken";
import { getConnection } from "./../database/database";

const signinHandler = async (req, res) => {
    const connection = await getConnection();
  try {
    const userFound = await connection.query("SELECT * FROM Usuarios WHERE usuario = ?", req.body.usuario);

    if (!userFound[0]) return res.status(400).json({ message: "Usuario no existente" });

    if (req.body.contraseña != userFound[0].contraseña)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: userFound[0].idUsuario }, 'secretKey', {
      expiresIn: 86400, // 24 hours
    });
    
    res.json({ token } );
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