import { Turno } from "../Models/index.js";

class TurnoController {
  constructor() {}
  createTurno = async (req, res, next) => {
    try {
      const { fecha, cantPersonaLimite, idSede, idActividad, idProfesor } = req.body;
      const result = await Turno.create({
        fecha,
        cantPersonaLimite,
        idSede,
        idActividad,
        idProfesor,
      });
      if (!result) throw new Error("no se pudo crear el turno");
      res
        .status(200)
        .send({ success: true, message: "turno creado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllTurnos = async (req, res, next) => {
    try {
      const result = await Turno.findAll({
        attributes: ["id", "fecha", "cantPersonaLimite", "idSede", "idActividad", "idProfesor"],
      });
      if (result.length === 0) {
        const error = new Error("no hay turnos");
        error.status = 400;
        throw error;
      }
      res
        .status(200)
        .send({ success: true, message: "turnos encontrados", result });
    } catch (error) {
      //res.status(400).send({ success: false, message: error.message });
      next(error);
    }
  };
  getTurnoById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Turno.findOne({
        where: {
          id,
        },
        attributes: ["id", "fecha", "cantPersonaLimite", "idSede", "idActividad", "idProfesor"],
      });
      if (!result) throw new Error("no se encontro al turno");
      res
        .status(200)
        .send({ success: true, message: "turno encontrado", result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  putTurnoById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { fecha, cantPersonaLimite, idSede, idActividad, idProfesor } = req.body;
      const result = await Turno.update({
        fecha,
        cantPersonaLimite,
        idSede,
        idActividad,
        idProfesor,
      },{
        where: {
          id
        },
      });
      if (!result) throw new Error("no se pudo modificar el turno");
      res
        .status(200)
        .send({ success: true, message: "turno modificado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  deleteTurnoById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Turno.destroy({
        where: {
          id
        },
      });
      if (!result) throw new Error("no pudo eliminar el turno");
      res
        .status(200)
        .send({ success: true, message: "turno eliminado", result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default TurnoController;
