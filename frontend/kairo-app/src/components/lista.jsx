import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Read from "./API/api";

export default function List() {
    const ApiData = Read();

    console.log(ApiData);

    return (
        <div className="list">
            <div className="header">
                <div className="negrilla">Indicador</div>
                <div className="negrilla">Descripcion</div>
                <div className="negrilla">Categoria</div>
                <div className="negrilla">Fecha de Inicio</div>
                <div className="negrilla">Fecha de Terminación</div>
                <div className="negrilla">Formula</div>
                <div className="negrilla">Frecuencia</div>
                <div className="negrilla">Cumplimiento</div>
                <div className="negrilla">Area</div>
            </div>
            {ApiData.map((data)=>{
                const desc = data.Descripcion.slice(0, 9);

                return(
                <div className='items'>
                    <div className="item">
                        <div>{data.Indicador}</div>
                        <div>{desc}...</div>
                        <div>{data.Categoria}</div>
                        <div>{data.FechaInicio}</div>
                        <div>{data.FechaTerminacion}</div>
                        <div>{data.Formula}</div>
                        <div>{data.Frecuencia}</div>
                        <div>{data.Cumplimiento}%</div>
                        <div>{data.Area}</div>
                    </div>
                    <div className='faBarss'>
                        <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#000000", }} />
                    </div>
                </div>
                )
            })}
            <div>
                <button className='btnAddelement'>Añadir Elemento</button>
            </div>
        </div>
    )
}