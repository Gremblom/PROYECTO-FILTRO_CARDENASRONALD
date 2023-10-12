import Accordion from "./Accordion";
import Navbar from "../navbar";
import '../../Main.css';
import { useHistory } from "react-router-dom";
import React,{useEffect} from "react";

export default function Ayuda(){
    let history = useHistory
    useEffect(() => {
        if(!localStorage.getItem('token')){
          history.push('/login')
        }
    },[])
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