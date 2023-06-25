import { Router } from "express";
const profesoresRoutes = Router();
import ProfesorController from "../Controllers/ProfesorController.js";
const profesorController = new ProfesorController()
import {validateAccess,isAdmin} from "../middleware/validateAccess.js";

profesoresRoutes.get("/", profesorController.getAllProfesores);
profesoresRoutes.get("/:id", profesorController.getProfesorById);
profesoresRoutes.post("/",validateAccess, isAdmin, profesorController.createProfesor);
profesoresRoutes.put("/:id",validateAccess, isAdmin, profesorController.putProfesorById);
profesoresRoutes.delete("/:id", validateAccess, isAdmin, profesorController.deleteProfesorById);


export default profesoresRoutes;
