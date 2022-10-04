import { Router } from "express";
const { ensureToken, validate } = require('../core/auth');
import { methods as authController } from "./../controllers/auth.controller";



const router = Router();

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/signin", authController.signinHandler);
router.get("/validartoken", ensureToken, validate, authController.getValidarToken)


export default router;