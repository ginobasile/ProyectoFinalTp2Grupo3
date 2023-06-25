//Va a recibir las rutas, las va a empaquetar
import { Router } from "express";
import userRoutes from "./userRoutes.js";
import turnosRoutes from "./turnosRoutes.js";
import actividadesRoutes from "./actividadesRoutes.js";
import profesoresRoutes from "./profesoresRoutes.js";
import sedesRoutes from "./sedesRoutes.js"
import paquetesRoutes from "./paquetesRoutes.js";
import turnoPersonaRoutes from "./turnoPersonasRoutes.js";
const indexRoutes=Router()

indexRoutes.use("/users", userRoutes);
indexRoutes.use("/turnos", turnosRoutes);
indexRoutes.use("/actividades", actividadesRoutes);
indexRoutes.use("/profesores", profesoresRoutes);
indexRoutes.use("/sedes", sedesRoutes);
indexRoutes.use("/paquetes", paquetesRoutes);
indexRoutes.use("/sacarTurno", turnoPersonaRoutes);


export default indexRoutes