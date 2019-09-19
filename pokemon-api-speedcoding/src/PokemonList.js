import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemons }) {
  return (
    <>
      {pokemons.map(pokemon => {
        return (<div key={pokemon.name}>
          <Pokemon pokemon={pokemon} />
        </div>);
      })}
    </>
  )
}
