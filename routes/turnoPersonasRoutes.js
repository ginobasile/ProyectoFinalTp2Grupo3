import { Router } from "express";
const turnoPersonaRoutes = Router();
import TurnoPersona from "../Controllers/turnoPersonaController.js";
import {validateAccess,isAdmin} from "../middleware/validateAccess.js";
const turnoPersona = new TurnoPersona()



turnoPersonaRoutes.post("/",validateAccess, turnoPersona.sacarTurno);

export default turnoPersonaRoutes;