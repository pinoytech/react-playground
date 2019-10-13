import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

import axios from "axios";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel;
    const fetchData = async () => {
      axios
        .get(page, {
          cancelToken: new axios.CancelToken(c => (cancel = c))
        })
        .then(res => {
          setLoading(false);
          setPokemons(res.data.results.map(pokemon => pokemon));
          setNextPage(res.data.next);
          setPrevPage(res.data.previous);
        });
      return () => cancel();
    };
    fetchData();
  }, [page]);

  function gotoNextPage() {
    setPage(nextPage);
  }

  function gotoPrevPage() {
    setPage(prevPage);
  }
  if (loading) return <Spinner />;

  return (
    <>
      <PokemonList pokemons={pokemons} setPokemons={setPokemons} />
      <Pagination
        gotoNextPage={nextPage ? gotoNextPage : null}
        gotoPrevPage={prevPage ? gotoPrevPage : null}
      />
    </>
  );
}
