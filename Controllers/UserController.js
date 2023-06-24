import User from "../Models/User.js";

class UserController {
  constructor() {
    
  }
  createUser = async (req, res, next) => {
    try {
      const {
        nombre,
        apellido,
        email,
        password,
        dni,
        altura,
        peso,
        edad,
        contacto,
        administrador,
        ticketsRestantes,
      } = req.body;
      const result = await User.create({
        nombre,
        apellido,
        email,
        password,
        dni,
        altura,
        peso,
        edad,
        contacto,
        administrador,
        ticketsRestantes,
      });
      if (!result) throw new Error("El usuario no pudo ser creado");
      res
        .status(200)
        .send({ success: true, message: "Ususario creado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllUsers = async (req, res, next) => {
    try {
      const result = await User.findAll({
        attributes: [
          "id",
          "nombre",
          "apellido",
          "email",
          "password",
          "dni",
          "altura",
          "peso",
          "edad",
          "contacto",
          "administrador",
          "ticketsRestantes",
        ],
      });
      if (result.length === 0) {
        const error = new Error("No hay Usuarios");
        error.status = 400;
        throw error;
      }
      res
        .status(200)
        .send({ success: true, message: "Usuarios encontrados:", result });
    } catch (error) {
      //res.status(400).send({ success: false, message: error.message });
      next(error);
    }
  };

  getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await User.findOne({
        where: {
          id,
        },
        attributes: [
          "id",
          "nombre",
          "apellido",
          "email",
          "password",
          "dni",
          "altura",
          "peso",
          "edad",
          "contacto",
          "administrador",
          "ticketsRestantes",
        ],
      });
      if (!result) throw new Error("No se encontro usuario con ese id");
      res
        .status(200)
        .send({ success: true, message: "Usuario encontrado:", result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  putUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const {
        nombre,
        apellido,
        email,
        password,
        dni,
        altura,
        peso,
        edad,
        contacto,
        administrador,
        ticketsRestantes,
      } = req.body;
      const result = await User.update(
        {
          nombre,
          apellido,
          email,
          password,
          dni,
          altura,
          peso,
          edad,
          contacto,
          administrador,
          ticketsRestantes,
        },
        {
          where: {
            id,
          },
        }
      );
      if (!result) throw new Error("No se pudo modificar el usuario.");
      res
        .status(200)
        .send({ success: true, message: "Usuario modificado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await User.destroy({
        where: {
          id,
        },
      });
      if (!result) throw new Error("No se pudo eliminar el usuario.");
      res
        .status(200)
        .send({
          success: true,
          message: "Usuario eliminado con exito.",
          result,
        });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  login = async (req, res, next) => {
    try {
      const { email, password } = req.body
      const result = await User.findOne({
        where:{
          email,
        },
      });
      if(!result) throw new Error ("Credenciales incorrectas");

      const hash = await result.validarPassword(password)
      if(!hash) throw new Error("Password incorrecto");
      res.status(200).send ({ success: true, message: " ", result});
  }catch(error) {
    res.status(400).send({ success:false, message: error.message});
  }
  }
}
export default UserController;
