import Turno from "./Turno.js";
import Actividad from "./Actividad.js";
import Profesor from "./Profesor.js"
import Role from "./Role.js"
import User from "./User.js";
import Sede from "./Sede.js";


    Actividad.hasMany(Turno, {
        foreignKey: "idActividad",
    });
    Turno.belongsTo(Actividad, {
        foreignKey: "idActividad",
        as: "actividad",
    });


export {Turno, Actividad, Profesor, Role,User, Sede};
