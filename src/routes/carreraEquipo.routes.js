import { Router } from "express";
const { ensureToken, validate } = require('../core/auth');
import { methods as carreraEquipoController } from "./../controllers/carreraEquipo.controller";

const router = Router();

router.get("/:id", ensureToken, validate, carreraEquipoController.getEquiposCarrera);

export default router;