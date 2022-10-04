import { Router } from "express";
const { ensureToken, validate } = require('../core/auth');
import { methods as carreraController } from "./../controllers/carrera.controller";

const router = Router();

router.get("/", carreraController.getCarreras);
router.get("/:id", carreraController.getCarrera);
router.post("/", ensureToken, validate, carreraController.addCarrera);
router.put("/:id", ensureToken, validate, carreraController.updateCarrera);
router.delete("/:id", ensureToken, validate, carreraController.deleteCarrera);

export default router;