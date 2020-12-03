import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../Constant/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  //Simula o ciclo de vida DidMount para a requisição de Pokemons.
  useEffect(() => {
    getPokemons();
  }, []);

  //Requisição de dados pos Pokémons
  const getPokemons = () => {
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const states = { pokemons, pokedex };
  const setters = { setPokemons, setPokedex };
  const requests = { getPokemons };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {/* //Props que indica ao global state que ele irá receber filhos */}
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
