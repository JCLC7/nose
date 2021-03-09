import React from 'react';
import Navbar from './componentes/Navbar'; 
import './App.css';
import Home from './componentes/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './componentes/pages/Services';
import Products from './componentes/pages/Products';
import Comparador from './componentes/pages/Comparador';
import SignUp from './componentes/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/comparador' component={Comparador}/>
          <Route path='/sign-up' component={SignUp} />          
        </Switch>
      </Router>
    </>
  );
}

export default App;
