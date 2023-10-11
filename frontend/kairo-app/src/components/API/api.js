import {useState, useEffect} from "react";
import axios from "axios";

export default function Read(){
    const [ApiData, setApiData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:7234/api/indicador/get")
            .then((response)=>{
                setApiData(response.data);
            })
    }, []);

    return ApiData;
}