import List from "./lista"


export default function Panel(){
    return (
        <div className="panel">
            <div>
                <h1>Panel de Indicadores</h1>
                <p>Aqui puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver más detalles , dale click a uno de ellos para más información</p>
            </div>
            <List/>
        </div>
    )
}