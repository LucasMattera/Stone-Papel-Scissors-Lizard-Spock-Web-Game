import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './componentes/Home';
import JugadorVsPC from './componentes/JugadorVsPC';
import JugadorVsJugador from './componentes/JugadorVsJugador';
import Navbar from './componentes/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component ={ Home } />
      <Route exact path="/1vsPC" component = {JugadorVsPC}/>
      <Route exact path="/1v1" component = {JugadorVsJugador}/>
      <Route exact path="/navBar" component = {Navbar}/>
      <Route path="*" render= {() => <h1>Not Found</h1>} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
