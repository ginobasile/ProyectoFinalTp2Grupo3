import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Turno extends Model {}

Turno.init(
  {
    fecha: {
      type: DT.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      }
    },
    cantPersonaLimite: {
      type: DT.INTEGER(),
      allowNull: false,
      validate: {
        max: 20,
        min: 2, 
      }
    },
    idSede:{
      type:DT.INTEGER(), 
      allowNull:false,
    },
    idActividad:{
      type:DT.INTEGER(), 
      allowNull:false,
    },
    idProfesor:{
      type:DT.INTEGER(), 
      allowNull:false,
    }
  },
  {
    sequelize: connection,
    modelName: "Turno",
    timestamps:false
  }
);

export default Turno;
