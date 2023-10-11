import {useState} from "react"; 
import {useHistory} from "react-router-dom";
import axios from "axios";

import Navbar from "./navbar";
import Read from "./API/api";

export default function DeleteForm(){
    let history = useHistory();
    const [id, setId] = useState("");

    const ApiData = Read();

    const deleteDoc = ()=>{
        try {
            axios.delete(`http://localhost:7234/api/indicador/del/${id}`)
                .then(()=>{
                    history.push("/main");
                })
        } catch (error) {
            
        }
    }

    return(
        <div className="centrar">
            <Navbar/>
            <form className="colorful-form formadd">
                <div className="form-group">
                    <label className="form-label" for="Categoria">Categoria</label>
                    <select onChange={(e) => setId(e.target.value)} required="" placeholder="Categoria" className="form-input" name="TipoReporte" id="TipoReporte">
                        {ApiData.map((data)=>{
                            return(
                                <option value={data._id}>{data.Indicador}</option>
                            )
                        })}
                    </select>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    deleteDoc();
                }}
                className="form-button" type="submit">Submit</button>
            </form>
        </div>
    )
}