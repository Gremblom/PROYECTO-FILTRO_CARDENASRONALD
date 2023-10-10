
export default function List (){
    return(
        <div className="list">
            <table className="tabla">
                <thead>
                    <tr>
                        <td className="negrilla">Indicador</td>
                        <td className="negrilla">Descripcion</td>
                        <td className="negrilla">Categoria</td>
                        <td className="negrilla">Fecha de Inicio</td>
                        <td className="negrilla">Fecha de Terminación</td>
                        <td className="negrilla">Formula</td>
                        <td className="negrilla">Frecuencia</td>
                        <td className="negrilla">Cumplimiento</td>
                        <td className="negrilla">Area</td>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="">
                        <td>Modelo3D</td>
                        <td>interes por dise....</td>
                        <td>Baja</td>
                        <td>12/05/21</td>
                        <td>12/12/21</td>
                        <td>Meg.Agil</td>
                        <td>1/4</td>
                        <td>31%</td>
                        <td>Marketing</td>
                        <td></td>
                    </tr>
                    <tr className="">
                        <td>Modelo3D</td>
                        <td>interes por dise....</td>
                        <td>Baja</td>
                        <td>12/05/21</td>
                        <td>12/12/21</td>
                        <td>Meg.Agil</td>
                        <td>1/4</td>
                        <td>31%</td>
                        <td>Marketing</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}