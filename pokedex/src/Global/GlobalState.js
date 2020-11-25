import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../Constant/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);

const getPokemons = () => {
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((erro) => {
        console.log(erro);
      });
}

const states = { pokemons, pokedex};
const setters = {setPokemons, setPokedex};
const requests= { getPokemons}

const data = { states, setters, requests };

return(
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
)

}

export default GlobalState;