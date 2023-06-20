import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Sede extends Model {}

Sede.init(
  {
    nombre: {
      type: DT.STRING,
      allowNull: false,
      validate: {
        len: [3,30]
      }
    },
    ubicacion: {
        type:DT.STRING,
        allowNull: false,
        validate: {
            len: [3,30]
          }
    },
  },
  {
    sequelize: connection,
    modelName: "Sede",
    timestamps:false
  }
);

export default Sede;