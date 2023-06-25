import Paquete from "../Models/Paquete.js"

class PaqueteController{
    constructor(){

    }
    createPaquete = async (req, res, next) => {
        try {
          const { nombre,cantTickets,precio } = req.body;
          const result = await Paquete.create({
            nombre,
            cantTickets,
            precio
          });
          if (!result) throw new Error("El paquete no pudo ser creado");
          res
            .status(200)
            .send({ success: true, message: "paquete creado con exito" });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };

      getAllPaquetes = async (req, res, next) => {
        try {
          const result = await Paquete.findAll({
            attributes: ["id", "nombre", "cantTickets", "precio"],
          });
          if (result.length === 0) {
            const error = new Error("No hay Paquetes");
            error.status = 400;
            throw error;
          }
          res
            .status(200)
            .send({ success: true, message: "Paquetes encontrados:", result });
        } catch (error) {
          //res.status(400).send({ success: false, message: error.message });
          next(error);
        }
      };

      getPaqueteById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const result = await Paquete.findOne({
            where: {
              id,
            },
            attributes: ["id", "nombre", "cantTickets", "precio"],
          });
          if (!result) throw new Error("No se encontro paquete con ese id");
          res
            .status(200)
            .send({ success: true, message: "Paquete encontrado:", result });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };

      putPaqueteById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const { nombre, cantTickets, precio } = req.body;
          const result = await Paquete.update({
            nombre,
            cantTickets,
            precio
          },{
            where: {
              id
            },
          });
          if (!result) throw new Error("No se pudo modificar el paquete.");
          res
            .status(200)
            .send({ success: true, message: "Paquete modificado con exito" });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };

      deletePaqueteById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const result = await Paquete.destroy({
            where: {
              id
            },
          });
          if (!result) throw new Error("No se pudo eliminar el paquete.");
          res
            .status(200)
            .send({ success: true, message: "Paquete eliminado con exito.", result });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      };
      
}
export default PaqueteController; 