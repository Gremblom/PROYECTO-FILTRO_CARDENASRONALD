import { useHistory } from 'react-router-dom';
import '../Main.css';

import Navbar from './navbar';
import Panel from './panel';
import React,{useEffect} from 'react';
export default function Main() {

    let history = useHistory();
    useEffect(() => {
        if(!localStorage.getItem('token')){
          history.push('/login')
        }
    },[])

    return(
        <div className='mainpg'>
            <Navbar/>
            <Panel/>
        </div>
    )
}