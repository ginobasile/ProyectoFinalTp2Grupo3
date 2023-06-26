import { Router } from "express";
const turnoPersonaRoutes = Router();
import TurnoPersona from "../Controllers/turnoPersonaController.js";
import {validateAccess,isAdmin} from "../middleware/validateAccess.js";
const turnoPersona = new TurnoPersona()

turnoPersonaRoutes.use(validateAccess);

turnoPersonaRoutes.post("/:idTurno", turnoPersona.sacarTurno);
turnoPersonaRoutes.delete("/:idTurno", turnoPersona.cancelarTurno);

export default turnoPersonaRoutes;