import React, { useContext, useEffect } from "react";
import Pokelist from "../Pokelist/Pokelist";
import { DivCard } from "./styled";
import GlobalStateContext from "../../Global/GlobalStateContext"

const HomePage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)
  
  useEffect(() => {
    requests.getPokemons();
  }, [requests.getPokemons]);

  const addPokemontoPokedex = (newPokemon) => {
    let newPokedex = [...states.pokedex];
    // let newPokemons = [...states.pokemons];
    newPokedex.push(newPokemon)
    // newPokemons.splice(newPokemon)
    setters.setPokedex(newPokedex);
    
    alert(`${newPokemon.name} agora está na sua pokedex!`)
  }


  return (
    <DivCard>
      {states.pokemons &&
        states.pokemons.map((item) => {
          return <Pokelist url={item.url} goToPokedex={() => addPokemontoPokedex(item)}/>;
        })}
    </DivCard>
  );
};

export default HomePage;
