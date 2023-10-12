import React, {useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar"
import '../Main.css';

export default function CrerIndicador(){
    let history = useHistory();

    const [Indicador, setIndicador] = useState("");
    const [Descripcion, setDescripcion] = useState("");
    const [Categoria, setCategoria] = useState("");
    const [FechaInicio, setFechaInicio] = useState("");
    const [FechaTerminacion, setFechaTerminacion] = useState("");
    const [Formula, setFormula] = useState("");
    const [Frecuencia, setFrecuencia] = useState("");
    const [Cumplimiento, setCumplimiento] = useState("");
    const [Area, setArea] = useState("");

    useEffect(() => {
        if(!localStorage.getItem('token')){
          history.push('/login')
        }
    },[])
    const sendIndicador = ()=>{
        try {

            const data = {
                Indicador,
                Descripcion,
                Categoria,
                FechaInicio,
                FechaTerminacion,
                Formula,
                Frecuencia,
                Cumplimiento,
                Area
            }

            console.log(data);

            axios.post("http://localhost:7234/api/indicador/new", data)
                .then(()=>{
                    history.push('/main');
                })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="centrar">
            <Navbar/>
            <form className="colorful-form formadd">
                <div className="form-group">
                    <label className="form-label" for="Indicador">Indicador</label>
                    <input onChange={(e) => setIndicador(e.target.value)} required="" placeholder="Indicador" className="form-input" name="Indicador" type="text" />
                </div>
                <div className="form-group">
                    <label className="form-label" for="Categoria">Descripcion</label>
                    <input onChange={(e) => setDescripcion(e.target.value)} required="" placeholder="Descripcion" className="form-input" name="Indicador" type="text" />
                </div>
                <div className="form-group">
                    <label className="form-label" for="Categoria">Categoria</label>
                    <input onChange={(e) => setCategoria(e.target.value)} required="" placeholder="Categoria" className="form-input" name="Categoria" id="email" type="email" />
                </div>
                <div className="form-group">
                    <label className="form-label" for="Descripcion">Fecha Inicio</label>
                    <input type="date" onChange={(e) => setFechaInicio(e.target.value)} required="" placeholder="Fecha Inicio" className="form-input" name="Descripcion" id="message"></input >
                </div>
                <div className="form-group">
                    <label className="form-label" for="Descripcion">Fecha Terminacion</label>
                    <input type="date" onChange={(e) => setFechaTerminacion(e.target.value)} required="" placeholder="Fecha Terminacion" className="form-input" name="Descripcion" id="message"></input >
                </div>
                <div className="form-group">
                    <label className="form-label" for="Descripcion">Formula</label>
                    <input type="text" onChange={(e) => setFormula(e.target.value)} required="" placeholder="Formula" className="form-input" name="Descripcion" id="message"></input >
                </div>
                <div className="form-group">
                    <label className="form-label" for="Descripcion">Frecuencia</label>
                    <input type="text" onChange={(e) => setFrecuencia(e.target.value)} required="" placeholder="Frecuencia en fraccion" className="form-input" name="Descripcion" id="message"></input >
                </div>
                <div className="form-group">
                    <label className="form-label" for="Descripcion">Cumplimiento</label>
                    <input type="number" onChange={(e) => setCumplimiento(parseInt(e.target.value))} required="" placeholder="Cumplimiento" className="form-input" name="Descripcion" id="message"></input >
                </div>
                <div className="form-group">
                    <label className="form-label" for="Descripcion">Area</label>
                    <input type="text" onChange={(e) => setArea(e.target.value)} required="" placeholder="Area" className="form-input" name="Descripcion" id="message"></input >
                </div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    sendIndicador();
                }}
                className="form-button" type="submit">Submit</button>
            </form>
        </div>
        
    )
}