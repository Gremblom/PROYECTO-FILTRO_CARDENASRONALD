import conexion from "../database/config.js";
import {ObjectId} from "mongodb";

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

const getOne = async (req, res)=>{
    try {
        const db = await conexion();

        const {coleccion, id} = req.params;

        const objId = new ObjectId(id);

        const colection = db.collection(coleccion);

        const response = await colection.find({_id : objId}).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json({ms : error.message});
    }
}

const post = async (req, res)=>{
    try {
        const db = await conexion();

        const {coleccion} = req.params;

        const colection = db.collection(coleccion);

        if (coleccion == 'reporte'){

            const {Usuario, ...data} = req.body;

            const objId = new ObjectId(Usuario);

            await colection.insertOne({Usuario: objId, ...data});

            res.json({ms : "Documento ingresado exitosamente"});
        } else {

            await colection.insertOne(req.body);

            res.json({ms : "Documento ingresado exitosamente"});
        }
    } catch (error) {
        res.status(400).json({ms : error.message});
    }
}

const update = async (req, res)=>{
    try {
        const db = await conexion();

        const {coleccion, id} = req.params;

        const colection = db.collection(coleccion);

        const objId = new ObjectId(id);

        await colection.findOneAndUpdate({_id : objId}, {$set : req.body});

        res.json({ms : "Documento actualizado exitosamente"});
    } catch (error) {
        res.status(400).json({ms : error.message});
    }
}

const deleteDoc = async (req, res)=>{
    try {
        const db = await conexion();

        const {coleccion, id} = req.params;

        const colection = db.collection(coleccion);

        const objId = new ObjectId(id);

        await colection.findOneAndDelete({_id : objId});

        res.json({ms : "Documento eliminado exitosamente"});
    } catch (error) {
        res.status(400).json({ms : error.message});
    }
}

export {
    getAll,
    getOne,
    post,
    update,
    deleteDoc
}