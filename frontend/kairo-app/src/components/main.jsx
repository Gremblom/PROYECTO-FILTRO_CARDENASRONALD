import '../Main.css';

import Navbar from './navbar';
import Panel from './panel';

export default function Main() {
    return(
        <div className='mainpg'>
            <Navbar/>
            <Panel/>
        </div>
    )
}