import Navbar from "./navbar"
import '../Main.css';
import { Link } from 'react-router-dom'

export default function LsReportes(){
    return(
        <div>
            <Link to="/reportesAdd">
                <button className='btnAddelement'>Añadir Elemento</button>
            </Link>
        </div>
    )
}