import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Carga from './components/pgCarga';
import Login from './components/login';
import Bienvenido from './components/bienvenida';



function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" render={() => <Carga ruta="login" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bienvenido" component={Bienvenido}/>
          <Route exact path="/cargando" render={() => <Carga ruta="main" />}/>

      </Router>
    </div>
  );
}

export default App;
