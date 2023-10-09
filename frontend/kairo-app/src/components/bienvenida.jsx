import logo from "../asset/KARIO_LOGO.png";

import { BrowserRouter as Router, Route } from 'react-router-dom';




export default function Bienvenido (){
    return(
        <div className="welcome">
            <img src={logo} width={100} alt="" />
            <h2 className="media">MEDIA</h2>
            <h1>Bienvenido de nuevo</h1>
            <img src={logo} className="redondear" width={100} alt="" />
            <p>Pedro Felipe Gómez Bonilla</p>
            <h6>Usuario Administrador</h6>
        </div>
    )
}