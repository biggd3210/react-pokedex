import React from 'react';
import './App.css';
import pokemon from './pokemonArr';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex props={{pokemon}} />
    </div>
  );
}

export default App;
