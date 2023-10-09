import conexion from "../database/config.js";

const getAll = async (req, res)=>{
    try {
        const db = await conexion();
        
        const {coleccion} = req.params;

        const colection = db.collection(coleccion);

        const response = await colection.find().toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json({ms : error.message});
    }
}

export {
    getAll
}