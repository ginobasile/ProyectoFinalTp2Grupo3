import { Router } from "express";
const turnosRoutes = Router();
import TurnoController from "../Controllers/turnoController.js";

const turnoController = new TurnoController();

turnosRoutes.get("/", turnoController.getAllTurnos);
turnosRoutes.get("/:id", turnoController.getTurnoById);
turnosRoutes.post("/", turnoController.createTurno);
turnosRoutes.put("/:id", turnoController.putTurnoById);
turnosRoutes.delete("/:id", turnoController.deleteTurnoById);

export default turnosRoutes;
