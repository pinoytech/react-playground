import React, { useState, useEffect } from 'react'
import {
  Link
} from 'react-router-dom';
import axios from 'axios';
import capitalize from 'lodash.capitalize';

import Spinner from './Spinner';
import Title from './Title';
import PokemonImage from './PokemonImage';

export default function PokemonPage({ match }) {
  const { params: { slug }} = match;

  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState()

  useEffect(() => {
    let cancel;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${slug}`, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setLoading(false);
      setPokemon(res.data);
    })
    .catch(error => {
      setLoading(false);
      setError(error.response.data)
    })

    return () => cancel();
  }, [slug])

  if (loading) return <Spinner />;

  return (
    <>
    { pokemon
      ? <>
          <div className="text-left">
            <Link to="/">Back to Home</Link>
          </div>
          <Title title={capitalize(pokemon.name)} />
          <PokemonImage sprites={pokemon.sprites} />
          <div className="card">
            <div className="card-body">
              <h5 className="mt-0">Abilities</h5>
              <ul>
                {pokemon.abilities.map(({ ability }) => <li key={ability.name}>{ability.name}</li>)}
              </ul>
            </div>
          </div>
        </>
      : <div className="text-center">
          <div className="card bg-primary text-white p-3">
            <Title title='Pokedex Error'/>
            {error}
          </div>

          <Link to="/">Back to Home Page</Link>
        </div>}
    </>
  )
}
