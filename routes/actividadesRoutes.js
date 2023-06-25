import { Router } from "express";
const actividadesRoutes = Router();
import ActividadController from "../Controllers/actividadController.js";
import {validateAccess,isAdmin} from "../middleware/validateAccess.js";
const actividadController = new ActividadController();

actividadesRoutes.get("/", actividadController.getAllActividades);
actividadesRoutes.get("/:id", actividadController.getActividadById);
actividadesRoutes.post("/",validateAccess,isAdmin,  actividadController.createActividad);
actividadesRoutes.put("/:id", validateAccess,isAdmin, actividadController.putActividadById);
actividadesRoutes.delete("/:id",validateAccess,isAdmin, actividadController.deleteActividadById);

export default actividadesRoutes;
