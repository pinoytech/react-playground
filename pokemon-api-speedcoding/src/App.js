import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel;
    axios.get(page, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setLoading(false);
      setPokemons(res.data.results.map(pokemon => pokemon));
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
    })
    return () => cancel();
  }, [page]);

  function gotoNextPage() {
    setPage(nextPage);
  }

  function gotoPrevPage() {
    setPage(prevPage);
  }

  if (loading) return 'Loading...';

  return (
    <>
      <PokemonList pokemons={pokemons} setPokemons={setPokemons} />
      <Pagination
        gotoNextPage={nextPage ? gotoNextPage : null }
        gotoPrevPage={prevPage ? gotoPrevPage : null }
      />
    </>
  );
}

export default App;
