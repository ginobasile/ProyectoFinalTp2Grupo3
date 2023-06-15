import { Router } from "express";
const actividadesRoutes = Router();
import ActividadController from "../Controllers/actividadController.js";

const actividadController = new ActividadController();

actividadesRoutes.get("/", actividadController.getAllActividades);
actividadesRoutes.get("/:id", actividadController.getActividadById);
actividadesRoutes.post("/", actividadController.createActividad);
actividadesRoutes.put("/:id", actividadController.putActividadById);
actividadesRoutes.delete("/:id", actividadController.deleteActividadById);

export default actividadesRoutes;
