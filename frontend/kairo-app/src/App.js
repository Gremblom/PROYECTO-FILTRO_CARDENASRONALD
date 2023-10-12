import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Carga from './components/pgCarga';
import Login from './components/login';
import Bienvenido from './components/bienvenida';
import Ayuda from './components/ayuda/Ayuda';
import Reportes from './components/reportes';
import CrerIndicador from './components/CreateIndicador';
import Main from './components/main';
import EliminarIndicador from './components/delete';
import LsReportes from './components/lsreporte';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Router>
          <Route exact path="/" render={() => <Carga ruta="login" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bienvenido" component={Bienvenido} />
          <Route exact path="/cargando" render={() => <Carga ruta="main" />} />
          <Route exact path="/ayuda" component={Ayuda} />
          <Route exact path="/reportes" component={LsReportes} />
          <Route exact path="/reportesAdd" component={Reportes} />
          
          <Route exact path="/bienvenido" component={Bienvenido}/>
          <Route exact path="/cargando" render={() => <Carga ruta="main" />}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/indicador" component={CrerIndicador}/>
          <Route exact path="/eliminarIndicador" component={EliminarIndicador} /> 
      </Router>
      </ChakraProvider>
      
    </div>
  );
}

export default App;
