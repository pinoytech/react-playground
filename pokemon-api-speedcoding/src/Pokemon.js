import React from 'react'
import capitalize from 'lodash.capitalize';
import {
  Link
} from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  return (
    <div className="card pokecard">
      <div className="card-body text-center">
        <h5 className="card-title text-center">{capitalize(pokemon.name)}</h5>
        <Link to={`/pokemon/${pokemon.name}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  )
}
