import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Carga from './components/pgCarga';
import Login from './components/login';



function App() {
  return (
    <div className="App">
      <Router>
        
          <Route exact path="/" component={Carga} />

          <Route exact path="/login" component={Login} />
        
      </Router>
    </div>
  );
}

export default App;
