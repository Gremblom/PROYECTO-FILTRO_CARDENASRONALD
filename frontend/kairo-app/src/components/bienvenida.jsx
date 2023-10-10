import logo from "../asset/KARIO_LOGO.png";
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';




export default function Bienvenido (){
    const history = useHistory();

  useEffect(() => {
        const tiempoEspera = 5000;
        const redirigir = setTimeout(() => {
          history.push(`/cargando`);
    }, tiempoEspera);

    return () => clearTimeout(redirigir);
  }, [history]);
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