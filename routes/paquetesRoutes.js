import { Router } from "express";
const paquetesRoutes = Router();
import PaqueteController from "../Controllers/paquetesController.js";
const paqueteController = new PaqueteController()

paquetesRoutes.get("/", paqueteController.getAllPaquetes);
paquetesRoutes.get("/:id", paqueteController.getPaqueteById);
paquetesRoutes.post("/", paqueteController.createPaquete);
paquetesRoutes.put("/:id", paqueteController.putPaqueteById);
paquetesRoutes.delete("/:id", paqueteController.deletePaqueteById);


export default paquetesRoutes;
