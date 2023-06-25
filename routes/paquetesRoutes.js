import { Router } from "express";
const paquetesRoutes = Router();
import PaqueteController from "../Controllers/paquetesController.js";
const paqueteController = new PaqueteController()
import {validateAccess,isAdmin} from "../middleware/validateAccess.js";

paquetesRoutes.get("/", paqueteController.getAllPaquetes);
paquetesRoutes.get("/:id", paqueteController.getPaqueteById);
paquetesRoutes.post("/",validateAccess,isAdmin,  paqueteController.createPaquete);
paquetesRoutes.put("/:id",validateAccess,isAdmin,  paqueteController.putPaqueteById);
paquetesRoutes.delete("/:id", validateAccess,isAdmin, paqueteController.deletePaqueteById);


export default paquetesRoutes;
