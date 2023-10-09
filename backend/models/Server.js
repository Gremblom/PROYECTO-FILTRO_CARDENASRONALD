import express from "express";
import cors from "cors";

class Server{
    constructor(){
        this.app = express();

        this.port = process.env.PORT;

        this.configCors = {
            methods : ["GET", "POST", "PUT", "PATCH", "DELETE"]
        }

        this.middlewares();

        this.rutas = {

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
        
    }
}

export default Server;