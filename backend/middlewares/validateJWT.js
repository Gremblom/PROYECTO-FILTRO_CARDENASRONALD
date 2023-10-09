import {response,request} from "express"
import jsonwebtoken from "jsonwebtoken";
import conection from "../database/config.js"

const validateJWT = async(req=request,res=response,next)=>{
    
    const token = req.header('apiToken');

    if(!token){
        return res.status(404).json({
            msg: 'No hay token en la peticion'
        })
    }

    try {
        const {uid} = jsonwebtoken.verify(token,process.env.KEY);
        const db = await conection();
        const coleccion = db.collection('usuario');
        const usuarios = await coleccion.find(uid).toArray();
        if(!usuarios){
            return res.status(404).json({
                msg:'Token no valido, Usuario no existe'
            })
        }

        if(!usuarios.estado){
            return res.status(404).json({
                msg: 'Token no valido, Usuario estado false'
            })
        }
        req.usuarios = usuarios;
        console.log("req usuarios en validate",req.usuarios);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}


export {
    validateJWT
}