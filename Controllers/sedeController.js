import Sede from "../Models/Sede.js"

class SedeController{
    constructor(){

    }
    createSede = async (req, res, next) => {
        try {
          const { nombre, ubicacion } = req.body;
          const result = await Sede.create({
            nombre,
            ubicacion
          });
          if (!result) throw new Error("La sede no pudo ser creada");
          res
            .status(200)
            .send({ success: true, message: "Sede creada con exito" });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };

      getAllSedes = async (req, res, next) => {
        try {
          const result = await Sede.findAll({
            attributes: ["id", "nombre", "ubicacion"],
          });
          if (result.length === 0) {
            const error = new Error("No hay Sedes");
            error.status = 400;
            throw error;
          }
          res
            .status(200)
            .send({ success: true, message: "Sedes encontradas:", result });
        } catch (error) {
          //res.status(400).send({ success: false, message: error.message });
          next(error);
        }
      };

      getSedeById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const result = await Sede.findOne({
            where: {
              id,
            },
            attributes: ["id", "nombre", "ubicacion"],
          });
          if (!result) throw new Error("No se encontro sede con ese id");
          res
            .status(200)
            .send({ success: true, message: "Sede encontrada:", result });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };

      putSedeById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const { nombre, ubicacion } = req.body;
          const result = await Sede.update({
            nombre,
            ubicacion
          },{
            where: {
              id
            },
          });
          if (!result) throw new Error("No se pudo modificar la sede.");
          res
            .status(200)
            .send({ success: true, message: "Sede modificada con exito" });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };

      deleteSedeById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const result = await Sede.destroy({
            where: {
              id
            },
          });
          if (!result) throw new Error("No se pudo eliminar la sede.");
          res
            .status(200)
            .send({ success: true, message: "Sede eliminada con exito.", result });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };
      
}
export default SedeController; 