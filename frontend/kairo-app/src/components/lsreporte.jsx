import Navbar from "./navbar"
import '../Main.css';
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter,Text, SimpleGrid,Heading, Button} from '@chakra-ui/react'
import axios  from 'axios';

export default function LsReportes(){
    const [ApiData, setApiData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:7234/api/reporte/get")
            .then((response)=>{
                setApiData(response.data);
            })
    }, []);

    console.log(ApiData);

    return(
        <div>
            <Navbar/>
            
            <SimpleGrid  className="contenedorCard" spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {ApiData.map((data)=>{
                    return(
                        <Card className="card">
                            <CardHeader >
                                <Heading size='md'>{data.TipoReporte} </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>{data.Usuario}:</Text>       
                                <Text>{data.Asunto}</Text>
                            </CardBody>
                            <CardFooter>
                                <Text>Descripcion:{data.Descripcion}</Text>
                            </CardFooter>
                        </Card>
                    )
                    
                })}
            </SimpleGrid>
            <div className="centrarElemento">
                <Link to="/reportesAdd" >
                    <button className='btnAddelement '>Añadir Elemento</button>
                </Link>
            </div>
        </div>
    )
}


