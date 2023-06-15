import { Actividad } from "../Models/index.js";

class ActividadController {
  constructor() {}
  createActividad = async (req, res, next) => {
    try {
      const { nombre, duracion } = req.body;
      const result = await Actividad.create({
        nombre,
        duracion
      });
      if (!result) throw new Error("no se pudo crear la actividad");
      res
        .status(200)
        .send({ success: true, message: "actividad creada con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllActividades = async (req, res, next) => {
    try {
      const result = await Actividad.findAll({
        attributes: ["id", "nombre", "duracion"],
      });
      if (result.length === 0) {
        const error = new Error("no hay actividades");
        error.status = 400;
        throw error;
      }
      res
        .status(200)
        .send({ success: true, message: "actividades encontradas", result });
    } catch (error) {
      //res.status(400).send({ success: false, message: error.message });
      next(error);
    }
  };
  getActividadById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Actividad.findOne({
        where: {
          id,
        },
        attributes: ["id", "nombre", "duracion"],
      });
      if (!result) throw new Error("no se encontro la actividad");
      res
        .status(200)
        .send({ success: true, message: "actividad encontrada", result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  putActividadById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { nombre, duracion } = req.body;
      const result = await Actividad.update({
        nombre,
        duracion
      },{
        where: {
          id
        },
      });
      if (!result) throw new Error("no se pudo modificar la actividad");
      res
        .status(200)
        .send({ success: true, message: "actividad modificada con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  deleteActividadById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Actividad.destroy({
        where: {
          id
        },
      });
      if (!result) throw new Error("no pudo eliminar la actividad");
      res
        .status(200)
        .send({ success: true, message: "actividad eliminada", result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ActividadController;
