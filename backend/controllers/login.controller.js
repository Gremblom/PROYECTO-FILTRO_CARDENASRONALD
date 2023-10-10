import conection from "../database/config.js"
import { generateJWT } from "../helpers/generateJWT.js"
import bcryptjs from "bcryptjs";

const login = async (req, res) => {
    try {
        const db = await conection();
        const coleccion = db.collection('usuario');
        const user = await coleccion.findOne({ Correo: req.body.correo })
        if (user) {
            const validatePassword = bcryptjs.compareSync(req.body.password, user.Password)
            if (validatePassword) {
                const token = await generateJWT(user._id)
                return res.send({
                    msg: 'Iniciando Sesion',
                    user:user,
                    token: token
                });
            }
            else {
                return res.status(404).send('Email o Password incorrecta')
            }
        }
        else {
            return res.status(404).send('Email o Password incorrecta')
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    login
} 