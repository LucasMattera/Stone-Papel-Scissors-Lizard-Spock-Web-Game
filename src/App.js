import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Juego from './componentes/Juego';
import Jugador1 from './componentes/Jugador1';
import Jugador2 from './componentes/Jugador2';
import Navbar from './componentes/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component ={ Juego } />
      <Route exact path="/jugador1" component = {Jugador1}/>
      <Route exact path="/jugador2" component = {Jugador2}/>
      <Route exact path="/navBar" component = {Navbar}/>
      <Route path="*" render= {() => <h1>Not Found</h1>} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
