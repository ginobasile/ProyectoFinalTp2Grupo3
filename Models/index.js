import User from "./User.js";
import Turno from "./Turno.js";
import Actividad from "./Actividad.js";
import Profesor from "./Profesor.js"
import Role from "./Role.js"

    Actividad.hasMany(Turno, {
        foreignKey: "idActividad",
    });
    Turno.belongsTo(Actividad, {
        foreignKey: "idActividad",
        as: "actividad",
    });


export { User, Turno, Actividad, Profesor, Role};
