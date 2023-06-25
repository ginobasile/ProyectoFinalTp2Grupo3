import Turno from "./Turno.js";
import Actividad from "./Actividad.js";
import Profesor from "./Profesor.js"
import Role from "./Role.js"
import User from "./User.js";
import Sede from "./Sede.js";
import Paquete from "./Paquete.js";
import turnoPersona from "./turnoPersona.js";



    Sede.hasMany(Turno, {
        foreignKey: "idSede",
    });
    Turno.belongsTo(Sede, {
        foreignKey: "idSede",
        as: "sede",
    });
    Profesor.hasMany(Turno, {
        foreignKey: "idProfesor",
    });
    Turno.belongsTo(Profesor, {
        foreignKey: "idProfesor",
        as: "profesor",
    });
    User.belongsToMany(Turno, {
        as: "turnos",
        through: "turnoPersona",
        foreignKey: "idUser",
        otherKey: "idTurno",
        timestamps: false
    });
    Turno.belongsToMany(User, {
        as: "users",
        through: "turnoPersona",
        foreignKey: "idTurno",
        otherKey: "idUser",
        timestamps: false
    });
    Actividad.hasMany(Turno, {
        foreignKey: "idActividad",
    });
    Turno.belongsTo(Actividad, {
        foreignKey: "idActividad",
        as: "actividad",
    });
    Role.hasMany(User, {
        foreignKey: "roleId",
      });
    User.belongsTo(Role, {
        foreignKey: "roleId",
        as: "role",
    });


export {Turno, Actividad, Profesor, Role,User, Sede, Paquete, turnoPersona};
