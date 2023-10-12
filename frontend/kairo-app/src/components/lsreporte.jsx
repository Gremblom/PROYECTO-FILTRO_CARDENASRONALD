import Navbar from "./navbar"
import '../Main.css';

import { Link, useHistory } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter,Text, SimpleGrid,Heading, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter,Text, SimpleGrid,Heading} from '@chakra-ui/react'
import axios  from 'axios';

export default function LsReportes(){
    const [ApiData, setApiData] = useState([]);
    let history = useHistory();
    useEffect(()=>{
        axios.get("http://localhost:7234/api/reporte/get")
            .then((response)=>{
                setApiData(response.data);
            })
                if(!localStorage.getItem('token')){
                  history.push('/login')
                }
    }, []);

    return(
        <div>
            <Navbar/>
            
            <SimpleGrid  className="contenedorCard" spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {ApiData.map((data)=>{
                    const {usuario} = data;

                    return(
                        <Card className="card">
                            <CardHeader >
                                <Heading size='md'>{data.TipoReporte} </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>{usuario[0].Username}:</Text>       
                                <Text>{data.Asunto}</Text>
                            </CardBody>
                            <CardFooter>
                                <Text>Descripcion: {data.Descripcion}</Text>
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


