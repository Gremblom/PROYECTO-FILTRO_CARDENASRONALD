import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export default function List() {
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

            <div className='items'>
                <div className="item">
                    <div>Modelo3D</div>
                    <div>interes por dise....</div>
                    <div>Baja</div>
                    <div>12/05/21</div>
                    <div>12/12/21</div>
                    <div>Meg.Agil</div>
                    <div>1/4</div>
                    <div>
                        <CircularProgress value={43} size='100px' color={obtenerColor(43)}>
                            <CircularProgressLabel>43%</CircularProgressLabel>
                        </CircularProgress>
                    </div>
                    <div>Marketing</div>
                </div>
                <div className='faBarss'>
                    <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#000000", }} />
                </div>
            </div>
            <div className='items'>
                <div className="item">
                    <div>Modelo3D</div>
                    <div>interes por dise....</div>
                    <div>Baja</div>
                    <div>12/05/21</div>
                    <div>12/12/21</div>
                    <div>Meg.Agil</div>
                    <div>1/4</div>
                    <div>31%</div>
                    <div>Marketing</div>
                </div>
                <div className='faBarss'>
                    <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#000000", }} />
                </div>
            </div>
            <div className='items'>
                <div className="item">
                    <div>Modelo3D</div>
                    <div>interes por dise....</div>
                    <div>Baja</div>
                    <div>12/05/21</div>
                    <div>12/12/21</div>
                    <div>Meg.Agil</div>
                    <div>1/4</div>
                    <div>31%</div>
                    <div>Marketing</div>
                </div>
                <div className='faBarss'>
                    <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#000000", }} />
                </div>
            </div>
            <div className='items'>
                <div className="item">
                    <div>Modelo3D</div>
                    <div>interes por dise....</div>
                    <div>Baja</div>
                    <div>12/05/21</div>
                    <div>12/12/21</div>
                    <div>Meg.Agil</div>
                    <div>1/4</div>
                    <div>31%</div>
                    <div>Marketing</div>
                </div>
                <div className='faBarss'>
                    <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#000000", }} />
                </div>
            </div>
            <div className='items'>
                <div className="item">
                    <div>Modelo3D</div>
                    <div>interes por dise....</div>
                    <div>Baja</div>
                    <div>12/05/21</div>
                    <div>12/12/21</div>
                    <div>Meg.Agil</div>
                    <div>1/4</div>
                    <div>31%</div>
                    <div>Marketing</div>
                </div>
                <div className='faBarss'>
                    <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#000000", }} />
                </div>
            </div>
            <div >
                <button className='btnAddelement'>Añadir Elemento</button>
            </div>
        </div>
    )
}