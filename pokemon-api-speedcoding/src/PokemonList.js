import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemons }) {
  return (
    <div className="row">
      {pokemons.map(pokemon => {
        return (<div className="col-md-3" key={pokemon.name}>
          <Pokemon pokemon={pokemon} />
        </div>);
      })}
    </div>
  )
}
