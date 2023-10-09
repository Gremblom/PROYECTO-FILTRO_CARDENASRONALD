import conection from "../database/config.js"
import {generateJWT } from "../helpers/generateJWT.js"

const login = async (req, res) => {
    try {
        const db = await conection();
        const coleccion = db.collection('usuario');
        const validateLogin = await coleccion.findOne({ $and: [{ Correo: req.body.correo }, { Password: req.body.password }] })
        if (validateLogin) {
            const token = await generateJWT(validateLogin._id)
            return res.send({
                msg:'Iniciando Sesion',
                token: token
            });
        }
        else {
            return res.status(404).send('Email o Password incorrecta')
        }
    } catch (error) {
        console.log(error);
    }
}


const register = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('usuario');
        const emailExist = await coleccion.findOne({Correo:req.body.correo});
        const data = req.body;
        if(emailExist){
            return res.status(404).send('Email ya existe');
        }
        else{
            const response = await coleccion.insertOne(data);
            res.status(200).send(response);
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    login,
    register
} 