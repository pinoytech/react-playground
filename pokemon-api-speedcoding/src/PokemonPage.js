import React, { useReducer, useEffect } from 'react'
import {
  Link
} from 'react-router-dom';
import axios from 'axios';
import capitalize from 'lodash.capitalize';

import Spinner from './Spinner';
import Title from './Title';
import PokemonImage from './PokemonImage';

function pokeReducer(state, action) {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, pokemon: action.payload, error: '', loading: false};
    case 'FETCH_ERROR':
      return { ...state, pokemon: action.payload, error: action.error, loading: false };
  }
}

export default function PokemonPage({ match }) {
  const { params: { slug }} = match;

  const [state, dispatch] = useReducer(pokeReducer, {
    loading: true,
    error: '',
    pokemon: null
  });

  useEffect(() => {
    let cancel;
    const fetchData = async() => {
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${slug}`, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      })
      .then(res => {
        // setLoading(false);
        // setPokemon(res.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch(error => {
        // setLoading(false);
        // setError(error.response.data)
        dispatch({ type: 'FETCH_ERROR', payload: null, error: error.response.data })
      })
  
      return () => cancel();
    }
    fetchData();
  }, [slug])

  const { loading, pokemon, error } = state;

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
