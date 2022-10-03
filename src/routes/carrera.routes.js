import { Router } from "express";
import { methods as carreraController } from "./../controllers/carrera.controller";
import { verifyToken } from "../middlewares/authJwt.js";

const router = Router();

router.get("/", carreraController.getCarreras);
router.get("/:id", carreraController.getCarrera);
router.post("/", carreraController.addCarrera);
router.put("/:id", carreraController.updateCarrera);
router.delete("/:id", carreraController.deleteCarrera);

export default router;