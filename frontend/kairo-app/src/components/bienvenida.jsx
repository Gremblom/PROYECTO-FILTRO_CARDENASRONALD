import logo from "../asset/KARIO_LOGO.png";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Bienvenido (){
    const history = useHistory();
    const img = localStorage.getItem('ProfileFoto');
    const userName = localStorage.getItem('Username');
    const rol = localStorage.getItem('Rol');
    useEffect(() => {
      if(!localStorage.getItem('token')){
        history.push('/login')
      }
      const tiempoEspera = 5000;
        const redirigir = setTimeout(() => {
          localStorage.removeItem('userName')
          history.push(`/cargando`);
    }, tiempoEspera);
    return () => clearTimeout(redirigir);
  }, [history]);
    return(
        <div className="welcome">
            <img src={logo} width={100} alt="" />
            <h2 className="media">MEDIA</h2>
            <h1>Bienvenido de nuevo</h1>
            <img src={img} className="redondear" width={100} />
            <p>{userName}</p>
            <h6>{rol}</h6>
        </div>
    )
}