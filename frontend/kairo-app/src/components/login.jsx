import logo from "../asset/KARIO_LOGO.png";
import React from 'react';
import { useHistory } from 'react-router-dom';
import Carga from "./pgCarga";


export default function Login(){
    const history = useHistory();
    const redirigirANuevaRuta = () => {
        history.push('/Bienvenido');
    };
    return(
        <div className="login">
            <img src={logo} width={100} alt="" />
            <h2 className="media">MEDIA</h2>
            <h1>Bienvenido al panel digital de KARIO Media</h1>
            <p>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
            <form>
                <label htmlFor="">Usuario</label>
                <input type="text" className='bg-white'/>
                <label className='' htmlFor="">Contraseña</label>
                <input type="text" className='bg-white'/>
                <button type="submit" onClick={redirigirANuevaRuta}>Ingresar al panel</button>
            </form>
            <h6>Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posible</h6>
        </div>
    )
}