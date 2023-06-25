import { Router } from "express";
const turnoPersonaRoutes = Router();
import TurnoPersona from "../Controllers/turnoPersonaController.js";
const turnoPersona = new TurnoPersona()



turnoPersonaRoutes.post("/", turnoPersona.sacarTurno);

export default turnoPersonaRoutes;