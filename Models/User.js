import { DataTypes as DT, Model } from "sequelize";
//datatype carga tipos de datos
import connection from "../connection/connection.js"

class User extends Model{}

//recibe dos parametros
//- en el primero van los campos
//- en el segundo paso una key
User.init({
    nombre:{
        type:DT.STRING,
        allowNull: false,
    },
    apellido:{
        type:DT.STRING,
        allowNull: false,
    },
    mail:{
        type:DT.STRING,
        allowNull: false,
    },
    password:{
        type:DT.STRING,
        allowNull: false,
    },
    dni:{
        type:DT.STRING(10),
        allowNull: false,
    },
    altura:{
        type:DT.DOUBLE,
        allowNull: false,
    },
    peso:{
        type:DT.DOUBLE,
        allowNull: false,
    },
    edad:{
        type:DT.INTEGER,
        allowNull: false,
    },
    contacto:{
        type:DT.STRING(15),
        allowNull: false,
    }
},
{
    sequelize:connection,
    modelName:"User",
}
);

export default User