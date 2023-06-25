import { Router } from "express";
const sedeRoutes=Router();
import SedeController from "../Controllers/sedeController.js";
import {validateAccess,isAdmin} from "../middleware/validateAccess.js";

const sedeController = new SedeController()
 
sedeRoutes.get("/", sedeController.getAllSedes);
sedeRoutes.get("/:id", sedeController.getSedeById);
sedeRoutes.post("/", validateAccess,isAdmin, sedeController.createSede);
sedeRoutes.put("/:id", validateAccess,isAdmin, sedeController.putSedeById);
sedeRoutes.delete("/:id", validateAccess,isAdmin, sedeController.deleteSedeById);

export default sedeRoutes;