import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Carga from './components/pgCarga';
import Login from './components/login';
import Bienvenido from './components/bienvenida';
import Ayuda from './components/ayuda/Ayuda';
import Reportes from './components/reportes';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" render={() => <Carga ruta="login" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bienvenido" component={Bienvenido} />
          <Route exact path="/cargando" render={() => <Carga ruta="main" />} />
          <Route exact path="/ayuda" component={Ayuda} />
          <Route exact path="/reportes" component={Reportes} />
      </Router>
    </div>
  );
}

export default App;
