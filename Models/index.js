import User from "./User.js";
import Turno from "./Turno.js";
import Actividad from "./Actividad.js";

    Actividad.hasMany(Turno, {
        foreignKey: "idActividad",
    });
    Turno.belongsTo(Actividad, {
        foreignKey: "idActividad",
        as: "actividad",
    });


export { User, Turno, Actividad };
