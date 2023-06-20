import { Router } from "express";
const sedeRoutes=Router();
import SedeController from "../Controllers/sedeController.js";

const SedeController = new SedeController
 
sedeRoutes.get("/", SedeController.getAllSedes);
sedeRoutes.get("/:id", SedeController.getSedeById);
sedeRoutes.post("/", SedeController.createSede);
sedeRoutes.put("/:id", SedeController.putSedeById);
sedeRoutes.delete("/:id", SedeController.deleteSedeById);

export default sedeRoutes