import { Router } from "express";
const profesoresRoutes = Router();
import ProfesorController from "../Controllers/ProfesorController.js";
const profesorController = new ProfesorController()

profesoresRoutes.get("/", profesorController.getAllProfesores);
profesoresRoutes.get("/:id", profesorController.getProfesorById);
profesoresRoutes.post("/", profesorController.createProfesor);
profesoresRoutes.put("/:id", profesorController.putProfesorById);
profesoresRoutes.delete("/:id", profesorController.deleteProfesorById);


export default profesoresRoutes;
