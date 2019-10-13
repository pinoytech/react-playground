import React from "react";
import capitalize from "lodash.capitalize";
import { Link } from "react-router-dom";

export default function PokemonList({ pokemons }) {
  return (
    <div className="row">
      <div className="col-md-4">
        <ul>
          {pokemons.map(pokemon => {
            return (
              <li className="col-md-3" key={pokemon.name}>
                <Link to={`/pokemon/${pokemon.name}`}>
                  {capitalize(pokemon.name)}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="col-md-8"></div>
      </div>
    </div>
  );
}
