import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Profesor extends Model {}

Profesor.init(
  {
    nombre: {
      type: DT.STRING,
      allowNull: false,
      validate: {
        len: [3,30]
      }
    },
    apellido: {
        type:DT.STRING,
        allowNull: false,
        validate: {
            len: [3,30]
          }
    },
  },
  {
    sequelize: connection,
    modelName: "Profesor",
    timestamps:false
  }
);

export default Profesor;
