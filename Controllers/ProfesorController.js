import Profesor from "../Models/Profesor.js"

class ProfesorController{
    constructor(){

    }
    createProfesor = async (req, res, next) => {
        try {
          const { nombre, apellido } = req.body;
          const result = await Profesor.create({
            nombre,
            apellido
          });
          if (!result) throw new Error("El profesor no pudo ser creado");
          res
            .status(200)
            .send({ success: true, message: "Profesor creado con exito" });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };

      getAllProfesores = async (req, res, next) => {
        try {
          const result = await Profesor.findAll({
            attributes: ["id", "nombre", "apellido"],
          });
          if (result.length === 0) {
            const error = new Error("No hay Profesores");
            error.status = 400;
            throw error;
          }
          res
            .status(200)
            .send({ success: true, message: "Profesores encontrados:", result });
        } catch (error) {
          //res.status(400).send({ success: false, message: error.message });
          next(error);
        }
      };

      getProfesorById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const result = await Profesor.findOne({
            where: {
              id,
            },
            attributes: ["id", "nombre", "apellido"],
          });
          if (!result) throw new Error("No se encontro profesor con ese id");
          res
            .status(200)
            .send({ success: true, message: "Profesor encontrado:", result });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };

      putProfesorById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const { nombre, apellido } = req.body;
          const result = await Profesor.update({
            nombre,
            apellido
          },{
            where: {
              id
            },
          });
          if (!result) throw new Error("No se pudo modificar el profesor.");
          res
            .status(200)
            .send({ success: true, message: "Profesor modificado con exito" });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };

      deleteProfesorById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const result = await Profesor.destroy({
            where: {
              id
            },
          });
          if (!result) throw new Error("No se pudo eliminar el profesor.");
          res
            .status(200)
            .send({ success: true, message: "Profesor eliminado con exito.", result });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };
      
}
export default ProfesorController; 