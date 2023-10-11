import logo from "../asset/KARIO_LOGO.png";
import bug from "../asset/Icon material-bug-report.svg";
import basura from "../asset/Icon material-delete-forever.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faRotateRight,faTrash,faBug,faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import Gestor from "./gestor";
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
    const history = useHistory();

    const redirigir = (ruta) => {
        history.push(`/${ruta}`); 
    }
    return(
        
        <div >
            <div className="navbar">
                <div className="accion">
                    <FontAwesomeIcon icon={faCirclePlus} size="2xl" style={{color: "#ff721b",}} />
                    <h3>Añadir</h3>

                </div>
                <div className="accion">
                    <FontAwesomeIcon icon={faRotateRight} size="2xl" style={{color: "#ff721b",}} />
                    <h3>Refrescar</h3>
                </div>
                <div className="accion">
                    <img src={basura} alt="" />
                    <h3>Eliminar</h3>
                </div>
                <div className="" onClick={() => redirigir("main")}>
                    <img src={logo} width={50} alt="" />
                </div>
                <div className="accion" onClick={() => redirigir("reportes")}>
                    <img src={bug} alt="" />
                    <h3>Reporte</h3>
                </div>
                <div className="accion" onClick={() => redirigir("ayuda")}>
                    <FontAwesomeIcon icon={faCircleQuestion} size="2xl" style={{color: "#ff721b",}} />                
                    <h3 >Ayuda</h3>
                </div>
            </div>
            <Gestor/>
        </div>
    )
}