import { DataTypes as DT, Model } from "sequelize";
//datatype carga tipos de datos
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";
class User extends Model {

  async validarPassword(password){
    return await bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    nombre: {
      type: DT.STRING,
      allowNull: false,
    },
    apellido: {
      type: DT.STRING,
      allowNull: false,
    },
    email: {
      type: DT.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },    
    password: {
      type: DT.STRING,
      allowNull: false,
    },
    salt: {
      type: DT.STRING()
    },
    dni: {
      type: DT.STRING(10),
      allowNull: false,
    },
    altura: {
      type: DT.DOUBLE,
      allowNull: false,
    },
    peso: {
      type: DT.DOUBLE,
      allowNull: false,
    },
    edad: {
      type: DT.INTEGER,
      allowNull: false,
    },
    contacto: {
      type: DT.STRING(15),
      allowNull: false,
    },
    administrador: {
      type: DT.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    ticketsRestantes: {
      type: DT.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    roleId: {
      type: DT.INTEGER(),
      defaultValue: 2,
    }
  },
  {
    sequelize: connection,
    modelName: "User",
    timestamps: false,
  }
);

User.beforeCreate(async(user)=>{
  const salt = await bcrypt.genSalt();
  user.salt = salt;
  const passwordHash = await bcrypt.hash(user.password, salt);
  user.password = passwordHash;
})

export default User;
