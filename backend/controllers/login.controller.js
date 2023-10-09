import conection from "../database/config.js"


const login = async (req, res) => {
    try {
        const db = await conection();
        const coleccion = db.collection('usuario');
        const validateLogin = await coleccion.findOne({ $and: [{ correo: req.body.Correo }, { password: req.body.Password }] })
        if (validateLogin) {
            res.send(`Iniciando sesion`);
        }
        else {
            return res.status(404).send('Email o Password incorrecta')
        }
    } catch (error) {
        console.log(error);
    }
}



export default login    