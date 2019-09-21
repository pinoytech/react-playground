import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Home from './Home';
import PokemonPage from './PokemonPage';
import './App.css';

function App() {

  return (
    <div className="container">
      <h2>Pokedex</h2>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokemon/:slug" component={PokemonPage} />
      </Switch>
    </div>
  );
}

export default App;
