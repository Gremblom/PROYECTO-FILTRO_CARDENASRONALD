import logo from "../asset/KARIO_LOGO.png";
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


export default function Carga(props){
  const history = useHistory();

  useEffect(() => {
        const tiempoEspera = 5000;
        const redirigir = setTimeout(() => {
          history.push(`/${props.ruta}`);
    }, tiempoEspera);

    return () => clearTimeout(redirigir);
  }, [history]);

  return(
        <div className="logocarga">
            <img src={logo} width={200} alt="" />
        </div>
    )
}