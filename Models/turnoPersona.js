import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class turnoPersona extends Model {}

turnoPersona.init(
  {
    idTurno:{
      type:DT.INTEGER(), 
      allowNull:false,
    },
    idUser:{
      type:DT.INTEGER(), 
      allowNull:false,
    }
  },
  {
    sequelize: connection,
    modelName: "turnoPersona",
    timestamps:false
  }
);

export default turnoPersona;
