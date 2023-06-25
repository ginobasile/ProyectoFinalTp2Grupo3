import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Paquete extends Model {}

Paquete.init(
  {
    nombre: {
      type: DT.STRING,
      allowNull: false,
      validate: {
        len: [3,30]
      }
    },
    cantTickets: {
      type: DT.INTEGER(),
      allowNull: false,
      defaultValue: 0,
    },
    precio: {
      type: DT.INTEGER(),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Paquete",
    timestamps:false
  }
);

export default Paquete;
