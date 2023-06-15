//LEVANTO SERVIDOR CON EXPRESS
import express from "express"
const app = express()
import indexRoutes from "./routes/indexRoutes.js"
import connection from "./connection/connection.js"
import {serverPort} from "./config/config.js"


//una vez que traigo indexRoutes, voy a empezar a ejecutar midlewares
app.use(indexRoutes)

await connection.sync({force:true}).then(() => {
    app.listen(serverPort, ()=>{
        console.log("Server ok: http://localhost:8080")
    });
});

