//Va a recibir las rutas, las va a empaquetar
import { Router } from "express";
import userRoutes from "./userRoutes.js";
import turnosRoutes from "./turnosRoutes.js";
import actividadesRoutes from "./actividadesRoutes.js";
import profesoresRoutes from "./profesoresRoutes.js";
const indexRoutes=Router()

indexRoutes.use("/users", userRoutes);
indexRoutes.use("/turnos", turnosRoutes);
indexRoutes.use("/actividades", actividadesRoutes);
indexRoutes.use("/profesores", profesoresRoutes);

export default indexRoutes