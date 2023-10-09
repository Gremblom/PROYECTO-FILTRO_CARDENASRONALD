import express from "express";
import cors from "cors";
import routesLogin from "../routes/login.routes.js";

import routesGeneral from "../routes/general.routes.js";

class Server{
    constructor(){
        this.app = express();

        this.port = process.env.PORT;

        this.configCors = {
            methods : ["GET", "POST", "PUT", "PATCH", "DELETE"]
        }

        this.middlewares();

        this.rutas = {
            login:'/auth',
            general : '/api'
        }

        this.routes();
    }

    listener(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running in port ${this.port}`);
        });
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors(this.configCors));
    }

    routes(){
        this.app.use(this.rutas.login,routesLogin);
        this.app.use(this.rutas.general, routesGeneral);
    }
}

export default Server;