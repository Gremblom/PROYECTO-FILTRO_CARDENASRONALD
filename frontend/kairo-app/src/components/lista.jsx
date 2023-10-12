
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Read from "./API/api";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'   
import axios  from 'axios';

export default function List() {
    const ApiData = Read();
    
    console.log(ApiData);

    function obtenerColor(numero) {
      if (numero >= 1 && numero <= 34) {
        return 'red';
      } else if (numero >= 35 && numero <= 67) {
        return 'orange';
      } else if (numero >= 68 && numero <= 100) {
        return 'green';
      } else {
        return 'Color no definido';
      }
    }

    const getOne = async(id)=>{
      const indicador = await axios.get(`http://localhost:7234/api/indicador/one/${id}`)
      console.log(indicador);
      return indicador
    }

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
            <div className='padre'>
            {ApiData.map((data)=>{
                const desc = data.Descripcion.slice(0, 9);

                return(
                <div className='items'>
                    <div className="item" onClick={()=>{
                      const id = data._id
                      getOne(id)
                    }}>
                        <div>{data.Indicador}</div>
                        <div>{desc}...</div>
                        <div>{data.Categoria}</div>
                        <div>{data.FechaInicio}</div>
                        <div>{data.FechaTerminacion}</div>
                        <div>{data.Formula}</div>
                        <div>{data.Frecuencia}</div>
                        <div>
                          <CircularProgress value={data.Cumplimiento} size='70px' color={obtenerColor(data.Cumplimiento)}>
                            <CircularProgressLabel>{data.Cumplimiento}%</CircularProgressLabel>                          
                          </CircularProgress>
                        </div>
                        <div>{data.Area}</div>
                    </div>
                    <div className='faBarss'>
                        <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#000000", }} />
                    </div>
                </div>
                )
            })}
            </div>
            <div>
                <Link to="/indicador">
                <button className='btnAddelement'>Añadir Elemento</button>
                </Link>
            </div>
        </div>
    )
}