import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Actividad extends Model {}

Actividad.init(
  {
    nombre: {
      type: DT.STRING,
      allowNull: false,
      validate: {
        len: [3,30]
      }
    },
    duracion: {
      type: DT.INTEGER(),
      allowNull: false,
      validate: {
        max: 120,
        min: 30, 
      }
    },
  },
  {
    sequelize: connection,
    modelName: "Actividad",
    timestamps:false
  }
);

export default Actividad;
