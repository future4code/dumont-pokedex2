import React, { useContext, useEffect } from "react";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import { DivCard } from "./styled";
import GlobalStateContext from "../../Global/GlobalStateContext"

const HomePage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)
  
  useEffect(() => {
    requests.getPokemons();
  }, [requests.getPokemons]);

  const addPokemontoPokedex = (newPokemon) => {
    const index = states.pokedex.findIndex((i) => i.pokeName === newPokemon.pokeName);
    let newPokedex = [...states.pokedex];
    if(index === -1 ) {
      newPokedex.push({newPokemon}) 
    }
    setters.setPokedex(newPokedex);
    alert(`${newPokemon.name} agora está na sua pokedex!`)
    console.log(newPokedex)
    
  }

  return (
    <DivCard>
      {states.pokemons &&
        states.pokemons.map((item) => {
          return <CardPokemon url={item.url} goToPokedex={() => addPokemontoPokedex(item)}/>;
        })}
    </DivCard>
  );
};

export default HomePage;
