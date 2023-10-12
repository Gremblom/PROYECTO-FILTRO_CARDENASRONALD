import React from "react";
import Accordion from "./Accordion";
import Navbar from "../navbar";
import '../../Main.css';

export default function Ayuda(){
    

    return (
        <div className="ayudabg mainpg">
            <Navbar/>
            <div className="panel">
                <h1>Preguntas Frecuentes </h1>
                <p>Conoce los temas más consultados en nuestra sede electrónica o sitio web.</p>
            </div>
            <Accordion />
        </div>
    )
}