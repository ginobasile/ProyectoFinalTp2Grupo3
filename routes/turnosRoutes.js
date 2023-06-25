import { Router } from "express";
const turnosRoutes = Router();
import TurnoController from "../Controllers/turnoController.js";
import {validateAccess,isAdmin} from "../middleware/validateAccess.js";

const turnoController = new TurnoController();

turnosRoutes.get("/", turnoController.getAllTurnos);
turnosRoutes.get("/:id", turnoController.getTurnoById);
turnosRoutes.post("/",validateAccess,isAdmin, turnoController.createTurno);
turnosRoutes.put("/:id", validateAccess,isAdmin,turnoController.putTurnoById);
turnosRoutes.delete("/:id",validateAccess,isAdmin, turnoController.deleteTurnoById);

export default turnosRoutes;
