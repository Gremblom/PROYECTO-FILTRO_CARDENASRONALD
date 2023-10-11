import React,{useState} from 'react';
import logo from "../asset/KARIO_LOGO.png";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from "axios";

import Read from "./API/api";

export default function Login(){
    const [password,setPassword] = useState("");
    const [correo,setCorreo] = useState("");

    const history = useHistory();
    const enterLogin = async()=>{
        try {
            const login = await axios.post(`http://localhost:7234/auth/login`,{
                correo,password
            }) 
            localStorage.setItem('token',login.data.token);
            localStorage.setItem('userName',login.data.user.Username);
            localStorage.setItem('imgUser',login.data.user.ProfileFoto);
            localStorage.setItem('id',login.data.user._id);
            Swal.fire({
                title: 'Iniciando Sesion',
                text: 'Datos validos',
                icon: 'success',
                showConfirmButton: false,
                timer: 800
              })
            history.push('/bienvenido')
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Email o Password incorrecta',
                icon: 'error',
                showConfirmButton: false,
                timer: 800
              })
        }
    }
    return(
        <div className="login">
            <img src={logo} width={100} alt="" />
            <h2 className="media">MEDIA</h2>
            <h1>Bienvenido al panel digital de KARIO Media</h1>
            <p>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
            <form>
                <label htmlFor="">Usuario</label>
                <input type="email" value={correo} onChange={(e)=>setCorreo(e.target.value)} />
                <label htmlFor="">Contraseña</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit" onClick={(e)=>{e.preventDefault();enterLogin()}} >Ingresar al panel</button>
            </form>
            <h6>Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posible</h6>
        </div>
    )
}