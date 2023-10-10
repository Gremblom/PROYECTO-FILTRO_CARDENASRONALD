
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faBell } from '@fortawesome/free-solid-svg-icons'
import logo from "../asset/KARIO_LOGO.png";

export default function Gestor(){
    return(
        <div className='gestor'>
            <FontAwesomeIcon icon={faGear} size="lg" style={{color: "#000000",}} />
            <FontAwesomeIcon icon={faBell} size="lg" style={{color: "#000000",}}/>
            <img src={logo} className='redondear' width={50} alt="" />
        </div>
    )
};