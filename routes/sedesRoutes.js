import { Router } from "express";
const sedeRoutes=Router();
import SedeController from "../Controllers/sedeController.js";

const sedeController = new SedeController()
 
sedeRoutes.get("/", sedeController.getAllSedes);
sedeRoutes.get("/:id", sedeController.getSedeById);
sedeRoutes.post("/", sedeController.createSede);
sedeRoutes.put("/:id", sedeController.putSedeById);
sedeRoutes.delete("/:id", sedeController.deleteSedeById);

export default sedeRoutes;