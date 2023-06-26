import { turnoPersona } from "../Models/index.js";


class TurnoPersona {
    constructor() {}
    sacarTurno = async (req, res, next) => {
        try {
            const {user} = req
            const {id} = user
            const idTurno = req.params.idTurno
            const result = await turnoPersona.create({
                idTurno,
                idUser: id
            })
            if (!result) throw new Error("no se pudo crear el turno");
            res
              .status(200)
              .send({ success: true, message: "turno creado con exito" });
        } catch(error){
            res.status(400).send({ success: false, message: error.message });
        }
    };
    cancelarTurno = async (req, res, next) => {
        try {
            const {user} = req
            const {id} = user
            const idTurno = req.params.idTurno
            const result = await turnoPersona.destroy({
                where: {
                    idTurno,
                    idUser: id
                },
              })
            if (!result) throw new Error("no se pudo caneclar el turno");
            res
              .status(200)
              .send({ success: true, message: "turno cancelado con exito" });
        } catch(error){
            res.status(400).send({ success: false, message: error.message });
        }
    }
}

export default TurnoPersona;