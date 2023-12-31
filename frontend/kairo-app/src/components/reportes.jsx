import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar"
import '../Main.css';

export default function Reportes(){
    let history = useHistory();

    const [Usuario, setUsuario] = useState("")
    const [TipoReporte, setTipoReporte] = useState("")
    const [Asunto, setAsunto] = useState("")
    const [Descripcion, setDescripcion] = useState("")

    useEffect(()=>{
        setUsuario(localStorage.getItem("id"));
    }, [])

    const sendReport = ()=>{
        try {
            const data = {
                Usuario,
                TipoReporte,
                Asunto,
                Descripcion
            }

            console.log(data);

            axios.post("http://localhost:7234/api/reporte/new", data)
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
                    <label className="form-label" for="Categoria">Categoria</label>
                    <select onChange={(e) => setTipoReporte(e.target.value)} required="" placeholder="Categoria" className="form-input" name="TipoReporte" id="TipoReporte">
                        <option>Escoja una opción válida</option>
                        <option value="Problema Técnico">Problema Técnico</option>
                        <option value="Sugerencia">Sugerencia</option>
                        <option value="Problema de Seguridad">Problema de Seguridad</option>
                        <option value="Queja">Queja</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label" for="Asunto">Asunto</label>
                    <input onChange={(e) => setAsunto(e.target.value)} required="" placeholder="Ingrese una descripción corta del problema" className="form-input" name="Asunto" id="email" type="email" />
                </div>
                <div className="form-group">
                    <label className="form-label" for="Descripcion">Mensaje</label>
                    <textarea onChange={(e) => setDescripcion(e.target.value)} required="" placeholder="Ingrese una descripción detallada del problema" className="form-input" name="Descripcion" id="message"></textarea>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    sendReport();
                }}
                className="form-button" type="submit">Submit</button>
            </form>
        </div>
    )
}